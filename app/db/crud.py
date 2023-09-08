from sqlalchemy.orm import Session

from app.db import models


def create_market_item(db: Session, item_type: str, market_name: str, item_name: str):
    db_market_item = models.MarketItem(type=item_type, market_name=market_name, item_name=item_name)
    db.add(db_market_item)
    db.commit()
    db.refresh(db_market_item)
    return db_market_item
