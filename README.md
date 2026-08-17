# ArcBooks

**Non-GST Accounting • Billing • Inventory**  
**Developed by TeamArc**

ArcBooks is designed for retail and wholesale businesses that want a clean, professional accounting application without a GST-heavy workflow.

## Production deployment philosophy

You only need SSH access to the VPS. No VPS control-panel changes are required.

The production stack is:
- Nginx
- React/Vite frontend
- FastAPI backend
- MongoDB
- Redis
- Docker Compose

MongoDB and Redis are private to the Docker network.

## One-time VPS setup

Ubuntu 22.04/24.04 recommended.

Install Docker:
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
```

Install Git:
```bash
sudo apt update
sudo apt install -y git
```

## Deploy

Clone your GitHub repository:
```bash
git clone YOUR_GITHUB_REPO_URL ArcBooks
cd ArcBooks
```

Create environment:
```bash
cp .env.example .env
nano .env
```

Set a strong SECRET_KEY.

Build and start:
```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Check:
```bash
docker compose -f docker-compose.prod.yml ps
```

Open:
```text
http://YOUR_VPS_IP
```

That's it for IP-based testing.

## Update

```bash
cd ArcBooks
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

## Logs

```bash
docker compose -f docker-compose.prod.yml logs -f
```

Only API logs:
```bash
docker compose -f docker-compose.prod.yml logs -f api
```

## Stop

```bash
docker compose -f docker-compose.prod.yml down
```

## Backup MongoDB

```bash
mkdir -p backups
docker compose -f docker-compose.prod.yml exec -T mongodb mongodump --archive > backups/arcbooks-$(date +%Y-%m-%d).archive
```

## Restore

```bash
cat backups/YOUR_BACKUP.archive | docker compose -f docker-compose.prod.yml exec -T mongodb mongorestore --archive
```

## Firewall

For IP testing, only HTTP is required:
```bash
sudo ufw allow 80/tcp
sudo ufw allow 22/tcp
```

Do NOT expose:
- 27017 MongoDB
- 6379 Redis
- 8000 FastAPI

Nginx proxies the API internally.

## Domain later

When you buy a domain, only Nginx/HTTPS configuration needs to be changed. The application architecture does not need to be rebuilt.

## Important accounting note

Production-grade accounting requires transaction integrity, immutable audit records, idempotency, permission checks and extensive financial test coverage. The repository includes the architecture for these concerns; financial workflows should be enabled module-by-module after their accounting tests pass.
