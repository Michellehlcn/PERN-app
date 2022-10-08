import React, { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import EditTodo from "./EditTimesheet";

const ListSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  //delete todo function

  const deleteSchedule = async id => {
    try {
      // eslint-disable-next-line
      const deleteSchedule = await fetch(`http://localhost:5000/schedules/${id}`, {
        method: "DELETE"
      });

      setSchedules(schedules.filter(schedule => schedule.form_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getSchedules = async () => {
    try {
      const response = await fetch("http://localhost:5000/schedules");
      const jsonData = await response.json();

      setSchedules(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSchedules();
  }, []);

  console.log(schedules);
  

  return (
    <Fragment>
      {" "}
      <Card className="mt-3">
      <Card.Body>
      <table class="table mt-3 text-center">
        <thead>
          <tr>
            <th>Approved</th>
            <th>Subject</th>
            <th>Course</th>
            <th>Campus</th>
            <th>Class Date</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {schedules.map(schedule => (
            <tr key={schedule.form_id}>
              <td>{schedule.is_active ? "Yes" : "No"}</td>
              <td>{schedule.subject}</td>
              <td>{schedule.course}</td>
              <td>{schedule.campus}</td>
              <td>{schedule.date}</td>
              <td>{schedule.time}</td>
              <td>
                <EditTodo schedule={schedule} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSchedule(schedule.form_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ListSchedules;