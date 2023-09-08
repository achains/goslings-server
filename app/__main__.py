import fastapi
from fastapi import FastAPI
from fastapi import Depends

from pydantic import HttpUrl, AnyHttpUrl
from sqlalchemy.orm import Session

from app.populate_db import populate_db
from app.parser import YandexMarketParser
from app.db import models
from app.db import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
populate_db(SessionLocal())

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/summarize/")
async def summarize(phone_page: AnyHttpUrl = "", phone_model: str = "", db: Session = Depends(get_db)):
    phone_reviews = (db.query(models.ItemReview)
                     .select_from(models.MarketItem).join(models.MarketItem.reviews)
                     .where(models.MarketItem.item_name == phone_model).all())

    response = {
        db.query(models.Author).get(review.author_id).author_name: review.summary for review in phone_reviews
    }

    return response
