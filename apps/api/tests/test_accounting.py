from decimal import Decimal
from app.services.invoice import line_total

def test_line_total():
    assert line_total(Decimal("2"), Decimal("100"), Decimal("10")) == Decimal("180")
