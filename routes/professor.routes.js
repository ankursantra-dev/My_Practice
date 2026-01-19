const router = require("express").Router();

router.get("/", (req, res) => { res.end('Professor working successfully'); });

router.get("/add", (req, res) => { res.end('Add professor working successfully'); });

module.exports = router;