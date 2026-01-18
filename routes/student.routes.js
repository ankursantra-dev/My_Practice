const router = require("express").Router();

router.get("/add", (req, res) => {res.end('Add student working successfully');});

module.exports = router;