from pydantic import BaseModel, Field
from decimal import Decimal
from typing import Optional

class Money(BaseModel):
    amount: Decimal = Field(default=Decimal("0"), ge=0)
    currency: str = "INR"

class PartyBase(BaseModel):
    name: str = Field(min_length=1, max_length=160)
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    opening_balance: Decimal = Decimal("0")
    opening_balance_type: str = "receivable"
    credit_limit: Decimal = Decimal("0")

class ItemBase(BaseModel):
    name: str = Field(min_length=1, max_length=160)
    sku: Optional[str] = None
    barcode: Optional[str] = None
    category: Optional[str] = None
    brand: Optional[str] = None
    unit: str = "pcs"
    purchase_rate: Decimal = Decimal("0")
    selling_rate: Decimal = Decimal("0")
    wholesale_rate: Decimal = Decimal("0")
    mrp: Decimal = Decimal("0")
    opening_stock: Decimal = Decimal("0")
    low_stock_limit: Decimal = Decimal("0")
