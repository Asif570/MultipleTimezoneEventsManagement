const router = require("express").Router();
const route = require("../route/route");
router.get("/health", (_req, res) => {
  res.status(250).json({ message: "Done !" });
});
router.use("/api/", route);

module.exports = router;
