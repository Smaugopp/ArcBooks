from pymongo import MongoClient
from app.core.config import settings

client = MongoClient(
    settings.mongodb_uri,
    serverSelectionTimeoutMS=5000,
    connectTimeoutMS=5000,
)
db = client[settings.mongodb_database]

def ensure_indexes():
    db.parties.create_index([("name", 1)])
    db.items.create_index([("name", 1)])
    db.items.create_index([("sku", 1)], unique=True, sparse=True)
    db.items.create_index([("barcode", 1)], unique=True, sparse=True)
    db.invoices.create_index([("invoice_number", 1)], unique=True, sparse=True)
    db.invoices.create_index([("created_at", -1)])
    db.ledger_entries.create_index([("party_id", 1), ("created_at", -1)])
