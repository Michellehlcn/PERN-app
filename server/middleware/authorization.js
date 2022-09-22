const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async(req, res, next) => {

    const jwtToken = req.header("jwt_token");
    if (!jwtToken) {
        return res.status(403).json({ msg: "Authorization denied" });
    }
    //Verify token
    try {
        const verify = jwt.verify(jwtToken, process.env.jwtSecret);
        req.user = verify.user;
        next();
    
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ msg: "Token is not valid" });
    }
}