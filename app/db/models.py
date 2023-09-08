from typing import List

from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.orm import relationship
from sqlalchemy.orm import mapped_column, Mapped

from app.db.database import Base

__all__ = ["MarketItem", "ItemReview"]


class MarketItem(Base):
    __tablename__ = "market_item"

    id: Mapped[int] = mapped_column(primary_key=True)
    reviews: Mapped[List["ItemReview"]] = relationship(back_populates="market_item")

    # TODO: Make entity for market item type
    type = Column(String, index=True)
    market_name = Column(String, index=True)
    item_name = Column(String)


class ItemReview(Base):
    __tablename__ = "item_review"

    id: Mapped[int] = mapped_column(primary_key=True)

    # FK Market item
    market_item_id: Mapped[int] = mapped_column(ForeignKey("market_item.id"))
    market_item: Mapped["MarketItem"] = relationship(back_populates="reviews")

    # # FK Author
    # author_id: Mapped[int] = mapped_column(ForeignKey("author.id"))
    # author: Mapped["Author"] = relationship(back_populates="reviews")

    text = Column(String)
    summary = Column(String)


class Author(Base):
    __tablename__ = "author"

    id: Mapped[int] = mapped_column(primary_key=True)
    author_name: Mapped[int] = Column(String, unique=True)
