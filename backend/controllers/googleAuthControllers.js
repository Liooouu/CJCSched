const { OAuth2Client } = require("google-auth-library");
const pool = require("../db");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
   
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const name = payload.name;

   
    let result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (!result.rows.length) {
      const newUser = await pool.query(
        "INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *",
        [email, name || null]
      );
      result = newUser;
    }

    const user = result.rows[0];

   
    const tokenJWT = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

  
    res.cookie("authToken", tokenJWT, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development" ,
      sameSite: "strict",
      maxAge: 3600000, // 1h
    });

    
    res.status(200).json({
      message: "Google login successful",
      token: tokenJWT,
      user,
    });

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: err.message});
  }
};

module.exports = { googleLogin };
