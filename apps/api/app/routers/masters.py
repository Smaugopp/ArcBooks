from fastapi import APIRouter
from app.models.common import PartyBase, ItemBase

router = APIRouter(prefix="/api/v1", tags=["Masters"])

@router.post("/parties")
async def create_party(party: PartyBase):
    return {"status": "validated", "party": party.model_dump(mode="json")}

@router.post("/items")
async def create_item(item: ItemBase):
    return {"status": "validated", "item": item.model_dump(mode="json")}
