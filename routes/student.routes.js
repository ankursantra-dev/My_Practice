const router = require("express").Router();
router.get("/", (req, res) => { res.end('Student working successfully'); });

router.get("/add", (req, res) => { res.end('Add student working successfully'); });

module.exports = router;