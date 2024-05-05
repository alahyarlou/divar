const express = require("express");
const swaggerConfig = require("./src/config/swagger.config.js");
const { mainRoutes } = require("./src/app.routes.js");
const AllExceptionHandler = require("./src/common/exceptions/all-exception.handler.js");
const NotFoundHandler = require("./src/common/exceptions/not-found.handler.js");
const cookieParser = require("cookie-parser");

require("dotenv").config();

async function main() {
  const app = express();

  const port = process.env.PORT;

  require("./src/config/mongoose.config.js");

  swaggerConfig(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
  app.use(mainRoutes);

  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(port, () => {
    console.log(`server is run in => http://localhost:${port}`);
  });
}

main();
