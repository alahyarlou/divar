function AllExceptionHandler(app) {
  app.use((err, req, res, next) => {
    let status = res?.status ?? res?.statusCode ?? res?.code;

    if (!status || isNaN(+status) || status > 511 || status < 200) status = 500;

    res.status.json({
      message: err?.message ?? err?.stack ?? "InternalServerError",
    });
  });
}

module.exports = AllExceptionHandler;
