const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "divar backend",
      version: "1.0.0",
    },
  },
  apis: [process.cwd() + "/src/modules/**/*.swagger.js"], // files containing annotations as above
};

function swaggerConfig(app) {
  const swaggerDocument = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, {}));
}

module.exports = swaggerConfig;
