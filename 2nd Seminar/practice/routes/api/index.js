var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    const result = {
        status: 200,
        message: "api에 접근합니다.",
    };
    res.status(200).send(result)
});

module.exports = router;
