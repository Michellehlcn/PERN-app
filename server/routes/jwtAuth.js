const router = require("express").Router;

const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require('../utils/jwtGenerator');
const dashboard = require("./dashboard");
const authorize = require("../middleware/authorize");
const validInfo = require("../middleware/validInfo");

//registering

router.post("/register", async (req, res) => {
    try {
        //1. destructure the req.body (name, email, password)

        const { name, email, password } = req.body;

        //2. check if user exist (if user exits then throw error)

        const user = pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);
        if (user.rows.length !== 0) {
            return res.status(401).send("User already exist.");
        };

        //3. Bcrypt the user password

        const saltRound = 10;
        const genSalt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, genSalt);

        //4. enter the new user inside our database

        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
            [name, email, bcryptPassword]);

        
        res.json(newUser.rows[0]);

        //5. generating our jwt token
        
        const token = jwtGenerator(newUser)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
} );

//login route

router.post("/login", async(req, res) => {
    try {
        //1. destructure the req.body

        const { email, password } = req.body;

        //2. check if user doesnt exist (if not then we throw error)

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[
            email
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect.");
        }

        //3. Check if incoming password is the same the database password

        const validPassword = bcrypt.compare(password, user.rows[0].user_password);

        if (!validPassword) {
            return res.status(401).json(
                "Password or Email is incorrect"
            )
        }

        //4. give them the jwt token

        const token = jwtGenerator(user.rows[0].user_id);
        res.json(token);


    } catch (error) {
        console.log(error.mesasge);
    }
})
module.exports = router;