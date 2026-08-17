from pydantic import BaseModel, Field
from decimal import Decimal
from typing import List, Optional

class InvoiceLine(BaseModel):
    item_id: Optional[str] = None
    description: str = ""
    quantity: Decimal = Field(gt=0)
    unit: str = "pcs"
    rate: Decimal = Field(ge=0)
    discount_percent: Decimal = Field(default=Decimal("0"), ge=0, le=100)

class InvoiceCreate(BaseModel):
    invoice_type: str = "retail"
    party_id: Optional[str] = None
    invoice_number: Optional[str] = None
    reference_number: Optional[str] = None
    discount: Decimal = Decimal("0")
    notes: str = ""
    lines: List[InvoiceLine] = Field(min_length=1)
