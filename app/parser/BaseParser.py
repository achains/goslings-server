from abc import ABC, abstractmethod

__all__ = ["BaseParser"]


class BaseParser(ABC):
    @classmethod
    @abstractmethod
    def from_html(cls):
        return NotImplementedError
