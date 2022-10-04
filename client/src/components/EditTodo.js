import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";

const EditTodo = ({ schedule }) =>{

    const [editSchedule, setEditSchedule] = useState(schedule);
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setEditSchedule(values => ({...values, [name]: value}))
      };
    //edit description function

    const updateSchedule = async e =>{
        e.preventDefault();
        try {
            const body = { schedule };
            // eslint-disable-next-line
            const response = await fetch(
                `http://localhost:5000/schedules/${schedule.form_id}`, 
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            window.location ="/dashboard";
        } catch (error) {
            console.log(error.message);
        };
    };

    return (
   <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${schedule.form_id}`}
      >
        Edit
      </button>

        {/*
            id= id10
        */}

       <div
        class="modal"
        id={`id${schedule.form_id}`}
        onClick={()=> setEditSchedule(schedule)}
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Schedule</h4>
                        <button
                        type = "button"
                        className= "close"
                        data-dismiss="modal"
                        onClick={() => setEditSchedule(schedule)}
                        >
                            &times;
                        </button>
                    </div>

                    <div class="modal-body">

              {/* Modal content */}

              {/* <input
                type="text"
                className="form-control"
                value={editSchedule}
                onChange={e => setEditSchedule(e.target.value)}
              /> */}
               {/* Subject input */}
               <Form.Group controlId="custom-select">
                    <Form.Label>SUBJECT</Form.Label>
                    <Form.Control as="select" className="rounded=0 shadow" name="subject" value={schedule.subject || ""} onChange={handleInputChange}>
                      <option className="d-none" value={schedule.subject}> Select Subject</option>
                      {[
                        "Curriculm Design",
                        "Health Science A (1-3T)",
                        "Massage Clinic C",
                        "Leadership in Early Childhood Education",
                        "Diverse Clients",
                        "Counselling Specialisation",
                        "The Yoga Business",
                        "Healthy Bodies Theory",
                        "Cycle A Theory",
                        "Advanced Personal Training(Theory+Practical)",
                        "Human Resource Management"
                        ].map(s => (
                          <option value={s}>{s}</option>
                        ))} 
                    </Form.Control>
                  </Form.Group>

                  {/* Course Input */}
                  <Form.Group controlId="custom-select">
                    <Form.Label>COURSE</Form.Label>
                    <Form.Control as="select" className="rounded=0 shadow" name="course" value={schedule.course || ""}  onChange={handleInputChange}>
                      <option className="d-none" value={schedule.course}> Select Course</option>
                      {[
                        "CIII ECEC(OLD)",
                        "DIP ECEC(OLD)",
                        "CIV Massage",
                        "DIP Massage",
                        "DIP ECEC(NEW)",
                        "DIP CNSL/CS/MH",
                        "DIP CNSL",
                        "CIV YOGA",
                        "CIV FIT",
                        "DRSM FIT"
                        ].map(s => (
                          <option value={s}>{s}</option>
                        ))} 
                    </Form.Control>
                  </Form.Group>
                  
                  {/* Campus Input */}
                  <Form.Group controlId="custom-select">
                    <Form.Label>CAMPUS</Form.Label>
                    <Form.Control as="select" className="rounded=0 shadow" name="campus" value={schedule.campus || ""} onChange={handleInputChange}>
                      <option className="d-none" value={schedule.campus}> Select Campus</option>
                      {[
                        "SYDNEY",
                        "MELBOURNE",
                        "BRISBANE",
                        "PERTH"
                        ].map(s => (
                          <option value={s}>{s}</option>
                        ))} 
                    </Form.Control>
                  </Form.Group>

                  {/* Date input */}
                  <Form.Group controlId="custom-select">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control as="select" className="rounded=0 shadow" name="date" value={schedule.date || ""} onChange={handleInputChange}>
                      <option className="d-none" value={schedule.date}> Select Date</option>
                      {[
                        "MONDAY",
                        "TUESDAY",
                        "WEDNESDAY",
                        "THURSDAY",
                        "FRIDAY"
                        ].map(s => (
                          <option value={s}>{s}</option>
                        ))} 
                    </Form.Control>
                  </Form.Group>

                  {/* Time input */}
                  <Form.Group controlId="custom-select">
                    <Form.Label>TIME</Form.Label>
                    <Form.Control as="select" className="rounded=0 shadow" name="time" value= {schedule.time || ""} onChange={handleInputChange}>
                      <option className="d-none" value={schedule.time}> Select Time</option>
                      {[
                        "AM 12:00 - 14:00",
                        "PM 12:00 - 14:00",
                        "EVE 12:00 - 14:00"
                        ].map(s => (
                          <option value={s}>{s}</option>
                        ))} 
                    </Form.Control>
                  </Form.Group>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateSchedule(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setEditSchedule(schedule)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> 
    </Fragment>
    );
};

export default EditTodo;