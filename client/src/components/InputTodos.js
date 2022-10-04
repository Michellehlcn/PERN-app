import React, { Fragment, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import "./MySchedule.css";

function MySchedule () {
  const [inputs, setInputs] = useState({});
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    };

  const handleSubmit = async(e) =>{
        console.log(e);
        e.preventDefault();
        try {
            alert(JSON.stringify(inputs));
            const body = inputs;

            // eslint-disable-next-line
            const response  = await fetch("http://localhost:5000/schedules", {
                method: "POST",
                headers: { "Content-Type": 
                "application/json" },
                body: JSON.stringify(body)
            });
            console.log(JSON.stringify(body));
            toast.success("Timesheet has been lodged successfully");
            window.location= "/dashboard";
        } catch (error) {
            console.error(error.message);
        };
    };

      return (
      <Fragment>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title text-center mt-5">Schedule your timesheet</h5>
                <h6 className="card-subtitle mb-2 text-muted">Please select options bellow</h6>
                {/* <form className="d-flex mt-5" onSubmit={onSubmitForm}> */}
                
                <Form id="myform" onSubmit={handleSubmit}>

                  {/* Subject input */}
                  
                    <Form.Group as={Row} className="mb-3 " controlId="formHorizontalSubject">
                        <Form.Label column sm={2} >SUBJECT</Form.Label>
                        <Col sm={3} >
                        <Form.Control as="select" className="rounded=0 shadow" name="subject" value={inputs.subject || ""} onChange={handleInputChange}>
                            <option className="d-none" value=""> Select Subject</option>
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
                        </Col>
                    </Form.Group>

                  {/* Course Input */}
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourse">
                        <Form.Label column sm={2} >COURSE</Form.Label>
                        <Col sm={3} >
                            <Form.Control as="select" className="rounded=0 shadow" name="course" value={inputs.course || ""}  onChange={handleInputChange}>
                              <option className="d-none" value=""> Select Course</option>
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
                        </Col>
                  </Form.Group>
                  
                  {/* Campus Input */}
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCampus">
                        <Form.Label column sm={2} >CAMPUS</Form.Label>
                        <Col sm={3} >
                            <Form.Control as="select" className="rounded=0 shadow" name="campus" value={inputs.campus || ""} onChange={handleInputChange}>
                              <option className="d-none" value=""> Select Campus</option>
                              {[
                                "SYDNEY",
                                "MELBOURNE",
                                "BRISBANE",
                                "PERTH"
                                ].map(s => (
                                  <option value={s}>{s}</option>
                                ))} 
                            </Form.Control>
                        </Col>
                  </Form.Group>

                  {/* Date input */}
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
                        <Form.Label column sm={2} >DATE</Form.Label>
                        <Col sm={3} >
                            <Form.Control as="select" className="rounded=0 shadow" name="date" value={inputs.date || ""} onChange={handleInputChange}>
                              <option className="d-none" value=""> Select Date</option>
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
                        </Col>
                  </Form.Group>

                  {/* Time input */}
                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalTime">
                        <Form.Label column sm={2} >TIME</Form.Label>
                        <Col sm={3} >
                            <Form.Control as="select" className="rounded=0 shadow" name="time" value= {inputs.time || ""} onChange={handleInputChange}>
                              <option className="d-none" value=""> Select Time</option>
                              {[
                                "AM 12:00 - 14:00",
                                "PM 12:00 - 14:00",
                                "EVE 12:00 - 14:00"
                                ].map(s => (
                                  <option value={s}>{s}</option>
                                ))} 
                            </Form.Control>
                        </Col>
                  </Form.Group>
                
                {/* Submit Button */}
                <Form.Group as={Row} className="d-flex">
                  <Col>
                    <button type="submit" className="btn btn-primary justify-content-center">Submit</button>
                  </Col>
                </Form.Group>
         
                </Form>
            </div>
        </div>
    </Fragment>
    );
}

export default MySchedule;