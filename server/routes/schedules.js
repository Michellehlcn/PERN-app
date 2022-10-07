const router = require("express").Router();
const pool = require("../db");
//create a todo

router.post("/", async(req, res) => {
    try {
        const { subject, campus, course, date, time  } = req.body;
        const newSchedule = await pool.query(
            "INSERT INTO form_schedule (subject, campus, course, date, time) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [subject, campus, course, date, time]
        );
        res.json(newSchedule.rows[0])
        
        console.log(req.body);
    } catch (err) {
        console.log("err.message");
    }
});

//get all todo

router.get("/", async(req, res) => {
    try {
        const allSchedules = await pool.query("SELECT * FROM form_schedule");
        res.json(allSchedules.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await pool.query("SELECT * FROM form_schedule WHERE form_id = $1", [id]);
        res.json(schedule.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, campus, course, date, time  } = req.body;
        const updateSchedule = await pool.query("UPDATE form_schedule SET subject = $1, campus = $2, course = $3, date = $4, time = $5 WHERE form_id= $6",[subject, campus, course, date, time, id]);
        res.json("Schedule was updated");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteSchedule = await pool.query("DELETE FROM form_schedule WHERE form_id = $1", [id]);
        res.json("Schedule was deleted.")
    } catch (err) {
        console.error(err.message);
    }
});
module.exports = router;