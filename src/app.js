require('dotenv').config();

const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(express.json());

// Swagger UI pour la documentation de l'API
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/employees", employeeRoutes);

// Démarrer le serveur sur le port 3000
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
