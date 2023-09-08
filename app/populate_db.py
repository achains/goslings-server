from os import PathLike

from sqlalchemy.orm import Session

from app.config import Config

from app.db import engine
from app.db import models
from app.db import crud

import pandas as pd
import pathlib


class DataReader:
    def __init__(self, review_table_path: PathLike, review_data_path: PathLike, summary_path: PathLike):
        self._review_df = pd.read_parquet(review_table_path)
        self._summary_df = pd.read_csv(summary_path)
        self._fix_review(absolute_data_path=review_data_path)

    @property
    def summary(self):
        return self._summary_df

    def _fix_review(self, absolute_data_path: PathLike):
        self._review_df["path_to_text"] = self._review_df["path_to_text"].apply(
            lambda entry: str(absolute_data_path) + entry[entry.find('/', 1):]
        )


def populate_db(db: Session):
    data_reader = DataReader(review_table_path=Config.review_table,
                             review_data_path=Config.review_data,
                             summary_path=Config.summary_table)

    # Populate author tables
    if db.query(models.Author).first() is None:
        for author_name in data_reader.summary["blogger"].unique():
            crud.create_author(db, author_name)

    # Populate market items
    if db.query(models.MarketItem).first() is None:
        for model_name in data_reader.summary["phone_name"].unique():
            crud.create_market_item(db, "phone", "yandex", model_name)

    # Populate item reviews
    if db.query(models.ItemReview).first() is None:
        for _, data_row in data_reader.summary.iterrows():
            phone_name = data_row["phone_name"]

            market_item = (db.query(models.MarketItem)
                           .filter(models.MarketItem.item_name == phone_name).first())

            author_id = db.query(models.Author).filter(models.Author.author_name == data_row["blogger"]).first()

            if market_item:
                crud.create_item_review(db,
                                        summary=data_row["sum_conclusion"],
                                        market_item_id=market_item.id,
                                        author_id=author_id.id)
