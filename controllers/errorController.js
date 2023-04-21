exports.notFound = (req, res, next) => {
    res.status(404).render("404.ejs");
};

exports.internalServerError = (error, req, res, next) => {
    console.error(error);
    res.status(500).render("500.ejs");
};