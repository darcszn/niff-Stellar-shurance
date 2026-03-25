import dotenv from "dotenv";

dotenv.config();

export const config = {
  app: {
    port: parseInt(process.env.PORT || "3001", 10),
    env: process.env.NODE_ENV || "development",
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    username: process.env.DB_USER || "niff_user",
    password: process.env.DB_PASSWORD || "niff_password",
    name: process.env.DB_NAME || "niff_stellar",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "dev-secret-change-in-production",
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    issuer: "niffyinsure",
    audience: "niffyinsure-api",
    tokenExpiryHours: 24 * 7, // 7 days
  },
  stellar: {
    network: process.env.STELLAR_NETWORK || "testnet",
    horizonUrl: process.env.HORIZON_URL || "https://horizon-testnet.stellar.org",
  },
  security: {
    bcryptRounds: 10,
  },
  bcrypt: {
    rounds: 10,
    saltRounds: 10,
  },
  logging: {
    level: process.env.LOG_LEVEL || "info",
    logAuthFailures: true,
  },
};

export default config;