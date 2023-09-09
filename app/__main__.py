import fastapi
from fastapi import FastAPI
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware


from pydantic import HttpUrl, AnyHttpUrl
from sqlalchemy.orm import Session

from app.populate_db import populate_db
from app.parser import YandexMarketParser
from app.db import models
from app.db import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
populate_db(SessionLocal())

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "https://market.yandex.ru",
    "https://stackoverflow.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    print(response)
    return response
