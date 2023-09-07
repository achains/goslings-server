from app.model import BaseSummarizer

__all__ = ["Summarizer"]


class Summarizer(BaseSummarizer):
    def generate_summary(self, data_txt: str) -> str:
        return "Sample summary"
