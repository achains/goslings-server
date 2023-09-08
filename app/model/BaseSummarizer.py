from abc import ABC, abstractmethod

__all__ = ["BaseSummarizer"]


class BaseSummarizer(ABC):
    @abstractmethod
    def generate_summary(self, data_txt: str) -> str:
        raise NotImplementedError
