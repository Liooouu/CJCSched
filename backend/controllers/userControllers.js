const pool = require("../db"); // Make sure db.js is configured for PostgreSQL
const bcrypt = require("bcrypt");

// 📌 Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email FROM users ORDER BY id ASC");
    if (!result.rows.length) {
      return res.status(200).json({ message: "No users currently in the database" });
    }
    res.status(200).json({ message: "All users", users: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// 📌 Get user by ID
const getUsersById = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ message: "Required valid ID number" });

  try {
    const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [id]);
    if (!result.rows.length) {
      return res.status(404).json({ message: "User not found", id });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

// 📌 Create new user
const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Fill up the missing fields!" });
  }

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length) {
      return res.status(400).json({ message: "Email already exists, use another email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User successfully created", user: newUser.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

// 📌 Update user
const updateUsers = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  if (!id) return res.status(400).json({ message: "ID is required" });
  if (!name && !email) return res.status(400).json({ message: "Nothing to update" });

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (!user.rows.length) return res.status(404).json({ message: "User not found" });

    const updated = await pool.query(
      "UPDATE users SET name = COALESCE($1, name), email = COALESCE($2, email) WHERE id = $3 RETURNING id, name, email",
      [name || null, email || null, id]
    );

    res.status(200).json({ message: "User successfully updated", user: updated.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user" });
  }
};

// 📌 Delete user
const deleteUsers = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ message: "ID is required" });

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (!user.rows.length) return res.status(404).json({ message: "User not found", id });

    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).json({ message: "User successfully deleted", id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete user" });
  }
};

module.exports = { getAllUsers, getUsersById, createUsers, updateUsers, deleteUsers };
