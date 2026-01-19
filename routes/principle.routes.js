const router = require("express").Router();

router.get("/", (req, res) => { res.end('Principle working successfully'); });

router.get("/add", (req, res) => { res.end('Add principle working successfully'); });

module.exports = router;