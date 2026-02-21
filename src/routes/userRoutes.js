const express = require("express");

function userRoutes(service) {
  const router = express.Router();

  router.post("/", async (req, res, next) => {
    try {
      const user = await service.createUser(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  });

  router.get("/", async (req, res, next) => {
    try {
      const users = await service.listUsers();
      res.json(users);
    } catch (e) {
      next(e);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const user = await service.getUser(Number(req.params.id));
      res.json(user);
    } catch (e) {
      next(e);
    }
  });

  router.put("/:id", async (req, res, next) => {
    try {
      const user = await service.updateUser(Number(req.params.id), req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const user = await service.deleteUser(Number(req.params.id));
      res.json(user);
    } catch (e) {
      next(e);
    }
  });

  return router;
}

module.exports = { userRoutes };