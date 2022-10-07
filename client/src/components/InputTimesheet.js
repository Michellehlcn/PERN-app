import React, { Fragment, useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "./MyTimesheet.css";

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
        <Card className="t-2">
          <Card.Header as="h5" className="card-title text-center mt-5 font-weight-bold">Schedule Your Timesheet</Card.Header>
          <Card.Body>
                <h6 className="card-subtitle mb-2 text-muted">Please select options bellow</h6>
                <hr class="my-4"/>
                {/* <form className="d-flex mt-5" onSubmit={onSubmitForm}> */}
                
                <Form id="myform" onSubmit={handleSubmit}>

                  {/* Subject input */}
                  
                    <Form.Group as={Row} className="mb-3 required" controlId="formHorizontalSubject">
                        <Form.Label column sm={2}  className="text-right text-primary font-weight-bold control-label" >Subject</Form.Label>
                        <Col sm={3} >
                        <Form.Select as="select" className="rounded=0 shadow" name="subject" value={inputs.subject || ""} onChange={handleInputChange}>
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
                        <Form.Label column sm={2}  className="text-right text-primary font-weight-bold control-label">Course Name</Form.Label>
                        <Col sm={3} >
                            <Form.Select as="select" className="rounded=0 shadow" name="course" value={inputs.course || ""}  onChange={handleInputChange}>
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
                        <Form.Label column sm={2} className="text-right text-primary font-weight-bold control-label" >Campus</Form.Label>
                        <Col sm={3} >
                            <Form.Select as="select" className="rounded=0 shadow" name="campus" value={inputs.campus || ""} onChange={handleInputChange}>
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
                        <Form.Label column sm={2}  className="text-right text-primary font-weight-bold control-label">Class Date</Form.Label>
                        <Col sm={3} >
                            <Form.Select as="select" className="rounded=0 shadow" name="date" value={inputs.date || ""} onChange={handleInputChange}>
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
                        <Form.Label column sm={2} className="text-right text-primary font-weight-bold control-label" >Time</Form.Label>
                        <Col sm={3} >
                            <Form.Select as="select" className="rounded=0 shadow" name="time" value= {inputs.time || ""} onChange={handleInputChange}>
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
                
                {/* Submit Button */}
                <Form.Group as={Row} className="text-center">
                  <Col>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </Col>
                </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted font-italic"><h6>* Please note that timesheets need to be approved in 2-business days. Please contact admin if you have any enquiries.</h6></Card.Footer>
        </Card>
    </Fragment>
    );
}

export default MySchedule;