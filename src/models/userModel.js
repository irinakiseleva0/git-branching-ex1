function userModel(pool) {
  return {
    async create({ name, email }) {
      const { rows } = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
      );
      return rows[0];
    },

    async findAll() {
      const { rows } = await pool.query("SELECT * FROM users ORDER BY id ASC");
      return rows;
    },

    async findById(id) {
      const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
      return rows[0] || null;
    },

    async update(id, { name, email }) {
      const { rows } = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
      );
      return rows[0] || null;
    },

    async remove(id) {
      const { rows } = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
      );
      return rows[0] || null;
    },
  };
}

module.exports = { userModel };