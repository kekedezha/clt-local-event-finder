import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotevn import load_dotenv
from database.models import Base

# Load environment variables from .env file
load_dotenv()

# Create database engine
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
engine = create_engine(DATABASE_URL, echo=True)

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    """Initialize the database and create all tables."""
    Base.metadata.create_all(bind=engine)