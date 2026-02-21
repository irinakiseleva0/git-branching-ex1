const path = require("path");
const dotenv = require("dotenv");

/**
 * Loads the environment file dynamically based on APP_ENV:
 *  - dev      -> .env.dev
 *  - release  -> .env.release
 *  - prod     -> .env.prod
 */
function loadEnv() {
  const appEnv = process.env.APP_ENV || "dev";
  const envFile = path.resolve(process.cwd(), `.env.${appEnv}`);

  const result = dotenv.config({ path: envFile });
  if (result.error) {
    console.error(`❌ Failed to load env file: ${envFile}`);
    throw result.error;
  }

  console.log(`✅ Loaded environment: ${appEnv} (${envFile})`);
  return appEnv;
}

module.exports = { loadEnv };