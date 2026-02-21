# Git Branching and Environments – NodeJS + PostgreSQL

## Overview

This project is a backend application built with **Node.js (Express)** and **PostgreSQL**, demonstrating:

* Dynamic environment configuration (**dev / release / prod**)
* Clean project architecture (config, models, services, routes)
* Full CRUD API
* Proper **Git Flow branching strategy**

---

## Project Structure

```
git-branching-ex1/
│
├── src/
│   ├── config/        # Environment loader & DB connection
│   ├── models/        # Database queries
│   ├── services/      # Business logic
│   ├── routes/        # API endpoints
│   └── app.js         # Application entry point
│
├── db/
│   └── init.sql       # Database schema
│
├── .env.dev
├── .env.release
├── .env.prod
├── package.json
└── README.md
```

---

## ⚙️ Environment Configuration

The application supports three environments:

| Environment | File           | Port |
| ----------- | -------------- | ---- |
| Development | `.env.dev`     | 3000 |
| Release     | `.env.release` | 3001 |
| Production  | `.env.prod`    | 3002 |

Environment is selected dynamically using:

```
APP_ENV=dev | release | prod
```

---

## Database Setup

### 1. Create databases

```
branching_dev
branching_release
branching_prod
```

### 2. Initialize schema

```
psql -U postgres -d branching_dev -f db/init.sql
psql -U postgres -d branching_release -f db/init.sql
psql -U postgres -d branching_prod -f db/init.sql
```

---

## ▶️ Running the Application

### Development

```
npm run dev
```

### Release

```
npm run release
```

### Production

```
npm run prod
```

---

## 🔍 API Endpoints

### Health Check

```
GET /health
```

Response:

```
{ "ok": true, "db": 1 }
```

---

### Users CRUD

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | /users     | Create user    |
| GET    | /users     | Get all users  |
| GET    | /users/:id | Get user by ID |
| PUT    | /users/:id | Update user    |
| DELETE | /users/:id | Delete user    |

---

### Example Request

```
POST /users
{
  "name": "Irina",
  "email": "irina@test.com"
}
```

---

## Git Flow Strategy

This project follows a structured Git workflow:

* `main` → Production-ready code
* `develop` → Integration branch
* `feature/*` → Feature development
* `release/1.0.0` → Release preparation

### Versioning

```
v1.0.0
```

---

## ✅ Key Features

* Dynamic environment loading using `dotenv`
* PostgreSQL connection pooling
* Clean separation of concerns
* Error handling middleware
* RESTful API design
* Multi-environment deployment support

---

## 🧪 Testing the API

Example (PowerShell):

```
Invoke-RestMethod http://127.0.0.1:3000/health
Invoke-RestMethod http://127.0.0.1:3000/users
```

---
## 👩‍💻 Author

Irina Kiseleva
---

## 📎 Submission

```
https://github.com/irinakiseleva0/git-branching-ex1
```
