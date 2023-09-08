import fastapi
from fastapi import FastAPI
from fastapi import Depends

from pydantic import HttpUrl, AnyHttpUrl
from sqlalchemy.orm import Session

from app.parser import YandexMarketParser
from app.db import models
from app.db import crud
from app.db import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/summarize/")
async def summarize(phone_page: AnyHttpUrl = "", db: Session = Depends(get_db)):
    parser = YandexMarketParser()
    result = crud.create_market_item(
        db, item_type="phone", market_name="yandex", item_name="iphone 13"
    )

    return result.id
