const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");


// middleware
app.use(cors( {origin: ['http://localhost:3000', 'http://127.0.0.1:3000']}));
app.use(express.json());

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// Enable cors 
// https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};

//ROUTES//

//register and login routes
// app.options('/authentication/verify', cors(corsOptionsDelegate)); //enable pre-light request for verify
app.use("/authentication", cors(corsOptions),require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/todos", require("./routes/todos"));

app.listen(5000,  () => {
    console.log("server has started on port 5000");
})