const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
