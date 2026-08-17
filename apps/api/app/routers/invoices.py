from fastapi import APIRouter
from app.models.invoice import InvoiceCreate
from app.services.invoice import invoice_total

router = APIRouter(prefix="/api/v1/invoices", tags=["Invoices"])

@router.post("/preview")
async def preview_invoice(invoice: InvoiceCreate):
    return {
        "invoice_type": invoice.invoice_type,
        "subtotal": str(invoice_total(invoice.lines)),
        "discount": str(invoice.discount),
        "tax": "0",
        "total": str(invoice_total(invoice.lines) - invoice.discount),
        "gst_mode": "disabled",
    }
