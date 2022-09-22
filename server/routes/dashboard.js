const router = require ("express").Router();
const authorize = require("../middleware/authorization");
const pool = require("../db");

router.post("/", authorize, async(req, res) => {
    try {
        const user = await pool.query(
            "SELECT user_name FROM users WHERE user_id =$1",
            [req.user.id]
        );

        req.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;