# Gosling Sight
<img src="images/icon.PNG" alt="drawing" width="10"/>

Gosling Sight is a browser extension for getting brief reviews on the product from tech bloggers


## Technologies
Gosling Sight based on:

- [FastAPI](https://fastapi.tiangolo.com) - Python web framework
- [SQLight](https://www.sqlite.org/index.html) - Database engine
- [Transfromers](https://huggingface.co/docs/transformers/index) - SOTA ML models implementation
- Javascript based Frontend

## Installation

```
docker build -t gosling -f Dockerfile ..
docker run --rm gosling
```