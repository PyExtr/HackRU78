from sqlalchemy import UniqueConstraint
from db import db


class SummaryModel(db.Model):
    __tablename__ = "Summaries"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    customer_name = db.Column(db.String(80), nullable=False)
    conversation = db.Column(db.String, nullable=False)
    summary = db.Column(db.String, nullable=False)
    personalization = db.Column(db.String, nullable=False)
    technical = db.Column(db.String, nullable=False)


    __table_args__ = (UniqueConstraint('customer_name', name='uix_1'), )
