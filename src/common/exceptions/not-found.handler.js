function NotFoundHandler(app) {
  app.use((req, res, next) => {
    res.json({
      message: "Not found route!",
    });
  });
}

module.exports = NotFoundHandler;
