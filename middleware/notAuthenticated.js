function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/admin/dashboard")
        return
    }
    next()
}



module.exports = checkNotAuthenticated