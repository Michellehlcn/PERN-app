import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  //delete todo function

  const deleteSchedule = async id => {
    try {
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
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Course</th>
            <th>Campus</th>
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
              <td>{schedule.subject}</td>
              <td>{schedule.course}</td>
              <td>{schedule.campus}</td>
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
    </Fragment>
  );
};

export default ListSchedules;