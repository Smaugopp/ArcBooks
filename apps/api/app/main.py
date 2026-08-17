from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.db import ensure_indexes
from app.routers.health import router as health_router
from app.routers.invoices import router as invoice_router
from app.routers.masters import router as masters_router

app = FastAPI(
    title="ArcBooks API",
    version="1.0.0-foundation",
    description="ArcBooks non-GST accounting API — Developed by TeamArc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    try:
        ensure_indexes()
    except Exception:
        # API remains bootable while MongoDB is starting.
        pass

app.include_router(health_router)
app.include_router(invoice_router)
app.include_router(masters_router)
