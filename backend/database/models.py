from sqlalchemy import Column, Integer, String, Date, Text
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Define ORM event model
class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    date = Column(Date, nullable=False)
    location = Column(String(255))
    category = Column(String(100))
    description = Column(Text)
    summary = Column(Text)
    meta_title = Column(String(255))
    meta_description = Column(String(512))