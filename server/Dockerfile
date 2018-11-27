FROM python:3.6-alpine
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5500
CMD ["python", "server.py"]