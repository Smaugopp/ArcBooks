# ArcBooks Product Specification

## Positioning

ArcBooks is a professional desktop-style business accounting application for non-GST retail and wholesale businesses.

The visual direction is intentionally:
- premium
- restrained
- business software first
- information-dense without being cluttered
- not a generic startup/SaaS landing page

## Core modules

1. Dashboard
2. Sales
3. Purchases
4. Inventory
5. Customers
6. Vendors
7. Accounting
8. Reports
9. Subscription
10. FAQ
11. Documentation
12. Support
13. Settings

## Accounting integrity requirements

Before enabling live financial workflows:
- Use Decimal for money calculations.
- Never use floating-point arithmetic for ledger totals.
- Every financial mutation must be transactional.
- Financial documents need immutable audit history.
- Voucher cancellation should create reversal entries rather than deleting history.
- API operations that create financial documents should support idempotency.
- Role permissions must be checked server-side.
- Invoice numbers must be unique per business/series.
- Ledger balances must be reproducible from entries.
- Every report should have automated reconciliation tests.

## Non-GST default

The normal invoice flow should not force:
- GSTIN
- HSN/SAC
- CGST/SGST/IGST
- tax slabs

Tax support can be an optional capability later.

## Retail + wholesale

A line item should support:
- MRP
- selling rate
- wholesale/supply rate
- purchase rate
- unit
- quantity
- discount
- description
- SKU
- barcode

## Print

Invoice templates should support:
- A4
- A5
- compact thermal/receipt layout later
- many line items
- clean totals
- customer details
- business details
- notes
- authorized signature area
