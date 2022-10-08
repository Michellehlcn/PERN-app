import React, { Fragment, useState } from "react";
import { Form, Col, Row  } from "react-bootstrap";

const EditTodo = ({ schedule }) =>{

    const [editSchedule, setEditSchedule] = useState({
      subject: schedule.subject,
      course: schedule.course, 
      campus: schedule.campus, 
      date: schedule.date, 
      time: schedule.time
    });

    const { subject, course, campus, date, time } = editSchedule;
    
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setEditSchedule(values => ({...values, [name]: value}))
      };
    //edit description function

    const updateSchedule = async e =>{
        e.preventDefault();
        try {
            const body = { subject, course, campus, date, time };
            
            // eslint-disable-next-line
            const response = await fetch(
                `http://localhost:5000/schedules/${schedule.form_id}`, 
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            console.log("update timesheet " + body);
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
                        <h4 class="modal-title">Review Timesheet</h4>
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
               <Form id="myform" >

                      <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalSubject">
                          <Form.Label column sm={3}  className="text-right text-primary font-weight-bold control-label" >Subject</Form.Label>
                          <Col >
                          <Form.Select as="select" className="rounded=0 shadow" name="subject" value={subject} onChange={e => handleInputChange(e)}>
                              <option className="d-none" value="">---Select---</option>
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
                            </Form.Select>
                          </Col>
                      </Form.Group>

                    {/* Course Input */}
                    <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalCourse">
                          <Form.Label column sm={3}  className="text-right text-primary font-weight-bold control-label">Course Name</Form.Label>
                          <Col >
                              <Form.Select as="select" className="rounded=0 shadow" name="course" value={course}  onChange={e => handleInputChange(e)}>
                                <option className="d-none" value="">---Select---</option>
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
                              </Form.Select>
                          </Col>
                    </Form.Group>

                    {/* Campus Input */}
                    <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalCampus">
                          <Form.Label column sm={3} className="text-right text-primary font-weight-bold control-label" >Campus</Form.Label>
                          <Col >
                              <Form.Select as="select" className="rounded=0 shadow" name="campus" value={campus} onChange={e => handleInputChange(e)}>
                                <option className="d-none" value="">---Select---</option>
                                {[
                                  "SYDNEY",
                                  "MELBOURNE",
                                  "BRISBANE",
                                  "PERTH"
                                  ].map(s => (
                                    <option value={s}>{s}</option>
                                  ))} 
                              </Form.Select>
                          </Col>
                    </Form.Group>

                    {/* Date input */}
                    <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalDate">
                          <Form.Label column sm={3}  className="text-right text-primary font-weight-bold control-label">Class Date</Form.Label>
                          <Col >
                              <Form.Select as="select" className="rounded=0 shadow" name="date" value={date} onChange={e => handleInputChange(e)}>
                                <option className="d-none" value="">---Select---</option>
                                {[
                                  "MONDAY",
                                  "TUESDAY",
                                  "WEDNESDAY",
                                  "THURSDAY",
                                  "FRIDAY"
                                  ].map(s => (
                                    <option value={s}>{s}</option>
                                  ))} 
                              </Form.Select>
                          </Col>
                    </Form.Group>

                    {/* Time input */}
                    <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalTime">
                          <Form.Label column sm={3} className="text-right text-primary font-weight-bold control-label" >Time</Form.Label>
                          <Col >
                              <Form.Select as="select" className="rounded=0 shadow" name="time" value= {time} onChange={e => handleInputChange(e)}>
                                <option className="d-none" value="">---Select---</option>
                                {[
                                  "AM 12:00 - 14:00",
                                  "PM 12:00 - 14:00",
                                  "EVE 12:00 - 14:00"
                                  ].map(s => (
                                    <option value={s}>{s}</option>
                                  ))} 
                              </Form.Select>
                          </Col>
                    </Form.Group>
                    
                    </Form>
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