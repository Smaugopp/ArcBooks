from decimal import Decimal

def line_total(quantity: Decimal, rate: Decimal, discount_percent: Decimal = Decimal("0")) -> Decimal:
    gross = quantity * rate
    discount = gross * discount_percent / Decimal("100")
    return gross - discount

def invoice_total(lines) -> Decimal:
    return sum(
        (line_total(x.quantity, x.rate, x.discount_percent) for x in lines),
        Decimal("0"),
    )
