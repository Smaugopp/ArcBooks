from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_name: str = "ArcBooks"
    app_brand: str = "ArcBooks"
    developed_by: str = "TeamArc"
    environment: str = "production"
    secret_key: str = "change-me"
    mongodb_uri: str = "mongodb://localhost:27017"
    mongodb_database: str = "arcbooks"
    redis_url: str = "redis://localhost:6379/0"
    support_phone: str = "8429956234"
    support_email: str = "raghav84299@gmail.com"
    timezone: str = "Asia/Kolkata"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
