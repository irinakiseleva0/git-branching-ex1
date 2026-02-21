const express = require("express");
const { loadEnv } = require("./config/env");
const { createPool } = require("./config/db");
const { userModel } = require("./models/userModel");
const { userService } = require("./services/userService");
const { userRoutes } = require("./routes/userRoutes");

loadEnv();

const app = express();
app.use(express.json());

const pool = createPool();
const model = userModel(pool);
const service = userService(model);

app.get("/health", async (req, res) => {
  const result = await pool.query("SELECT 1 AS ok");
  res.json({ ok: true, db: result.rows[0].ok });
});

app.use("/users", userRoutes(service));

// centralized error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});