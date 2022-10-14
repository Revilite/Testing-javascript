const router = require("express").Router();
const path = require("path");
const animeRoute = require("./anime");
const canvasRoute = require("./canvas");


router.use("/anime", animeRoute);
router.use("/canvas", canvasRoute);

router.get("/", (req, res) =>{
  res.send("Wrong Route!");
})
module.exports = router;