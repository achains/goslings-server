FROM python:3.10

WORKDIR /goslings

COPY ./requirements.txt /goslings/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /goslings/requirements.txt

COPY ./app /goslings/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
