function NotFoundHandler(app) {
  app.use((req, res, next) => {
    res.status.json({
      message: "Not found route!",
    });
  });
}

module.exports = NotFoundHandler;
