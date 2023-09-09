from sqlalchemy.orm import Session

from app.db import models


def create_market_item(db: Session, item_type: str, market_name: str, item_name: str):
    db_market_item = models.MarketItem(
        type=item_type, market_name=market_name, item_name=item_name
    )
    db.add(db_market_item)
    db.commit()
    db.refresh(db_market_item)
    return db_market_item


def create_author(db: Session, author_name: str):
    db_author = models.Author(author_name=author_name)
    db.add(db_author)
    db.commit()
    db.refresh(db_author)
    return db_author


def create_item_review(db: Session, summary: str, market_item_id: int, author_id: int):
    db_item_review = models.ItemReview(
        summary=summary, market_item_id=market_item_id, author_id=author_id
    )
    db.add(db_item_review)
    db.commit()
    db.refresh(db_item_review)
    return db_item_review
