const pool = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
exports.createUsersAccount = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    const token = jwt.sign({ id: newUser.rows[0].id, email }, process.env.JWT_TOKEN_SECRET, { expiresIn: "1h" });

    res.json({ user: newUser.rows[0], token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};


exports.loginUserAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (!userQuery.rows.length) return res.status(400).json({ message: "User not found" });

    const user = userQuery.rows[0];

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};


// Verify user (protected)
exports.verifyUser = async (req, res) => {
  try {
    const userQuery = await pool.query("SELECT * FROM users WHERE id = $1", [req.user.id]);
    if (!userQuery.rows.length) return res.status(404).json({ message: "User not found" });

    res.json({ user: userQuery.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Verification failed" });
  }
};
