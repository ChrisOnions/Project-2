const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const api = require("./api");

router.use("/api", api);
router.use("/", homeRoutes);

module.exports = router;
