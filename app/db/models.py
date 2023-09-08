from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from app.db.database import Base

__all__ = ["MarketItem", "ItemReview"]


class MarketItem(Base):
    __tablename__ = "market_item"

    id = Column(Integer, primary_key=True, index=True)
    # TODO: Make entity for market item type
    type = Column(String, index=True)
    market_name = Column(String, index=True)
    item_name = Column(String)


class ItemReview(Base):
    __tablename__ = "item_review"

    id = Column(Integer, primary_key=True, index=True)
    market_item_id = Column(Integer, ForeignKey("market_item.id"))
    market_item = relationship("MarketItem", back_populates="item_review")

