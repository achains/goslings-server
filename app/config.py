from dataclasses import dataclass
from pathlib import Path


@dataclass
class Config:
    app_dir: Path = Path(__file__).parent
    data_dir: Path = app_dir / "data"
    review_dir: Path = data_dir / "review"
    review_table: Path = review_dir / "df.parquet"
    review_data: Path = review_dir / "data"
    summary_table: Path = data_dir / "sum_table.csv"
