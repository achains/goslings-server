import fastapi
from fastapi import FastAPI

from pydantic import HttpUrl, AnyHttpUrl
from parser import YandexMarketParser

app = FastAPI()


@app.get("/summarize/")
async def summarize(phone_page: AnyHttpUrl = ""):
    parser = YandexMarketParser()
    return phone_page
