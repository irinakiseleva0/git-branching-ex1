function userService(model) {
  return {
    async createUser(payload) {
      if (!payload?.name || !payload?.email) {
        const err = new Error("name and email are required");
        err.status = 400;
        throw err;
      }
      return model.create(payload);
    },

    listUsers() {
      return model.findAll();
    },

    async getUser(id) {
      const user = await model.findById(id);
      if (!user) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
      }
      return user;
    },

    async updateUser(id, payload) {
      if (!payload?.name || !payload?.email) {
        const err = new Error("name and email are required");
        err.status = 400;
        throw err;
      }
      const updated = await model.update(id, payload);
      if (!updated) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
      }
      return updated;
    },

    async deleteUser(id) {
      const deleted = await model.remove(id);
      if (!deleted) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
      }
      return deleted;
    },
  };
}

module.exports = { userService };