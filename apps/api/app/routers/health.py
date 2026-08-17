from fastapi import APIRouter
from app.core.config import settings

router = APIRouter(tags=["System"])

@router.get("/health")
async def health():
    return {
        "status": "ok",
        "service": "arcbooks-api",
        "brand": settings.app_brand,
        "developed_by": settings.developed_by,
    }

@router.get("/api/v1/support")
async def support():
    return {
        "phone": settings.support_phone,
        "email": settings.support_email,
        "hours": "Monday to Saturday, 11:00 AM – 7:00 PM",
    }
