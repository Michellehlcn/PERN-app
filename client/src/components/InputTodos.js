import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("hello");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            // eslint-disable-next-line
            const response  =await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": 
                "application/json" },
                body: JSON.stringify(body)
            });
            window.location= "/dashboard";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
    <Fragment>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title text-center mt-5">Schedule your timesheet</h5>
                <h6 className="card-subtitle mb-2 text-muted">Please select options bellow</h6>


                <Form id="myform" onSubmit={(e) =>onTimesheet(e)}>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="Subject">
        Subject
        </Label>
        <Input
          id="Subject"
          placeholder="Select Subject"
          type="select"
          error={error.subject}
          value={timesheet.subject}
          onChange={(e) => setTimesheet({...timesheet, subject: e.target.value })}
          required
        >
          <option></option>
          <option>Nurturing Children</option>
          <option>Curriculm Design</option>
          <option>Health Science A (1-3T)</option>
          <option>Massage Clinic C</option>
          <option>Leadership in Early Childhood Education</option>
          <option>Diverse Clients</option>
          <option>Counselling Specialisation</option>
          <option>The Yoga Business</option>
          <option>Healthy Bodies Theory</option>
          <option>Cycle A Theory </option>
          <option>Advanced Personal Training(Theory+Practical)</option>
          <option>Human Resource Management</option>
        </Input>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Course">
        Course
        </Label>
        <Input
          id="Course"
          placeholder="Select course"
          type="select"
          error={error.course}
          value={timesheet.course}
          onChange={(e) => setTimesheet({...timesheet, course: e.target.value })}
          required
        >
          <option></option>
          <option>CIII ECEC(OLD)</option>
          <option>DIP ECEC(OLD)</option>
          <option>CIV Massage</option>
          <option>DIP Massage</option>
          <option>DIP ECEC(NEW)</option>
          <option>DIP CNSL/CS/MH</option>
          <option>DIP CNSL</option>
          <option>DIP ECEC(OLD)</option>
          <option>CIV YOGA</option>
          <option>CIV FIT</option>
          <option>DRSM FIT</option>
        </Input>
      </FormGroup>
    </Col>
  </Row>

  <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="Campus">
        Campus
        </Label>
        <Input
          id="Campus"
          placeholder="Select campus"
          className="mb-3"
          type="select"
          error={error.campus}
          value={timesheet.campus}
          onChange={(e) => setTimesheet({...timesheet, campus: e.target.value })}
        >
          <option></option>
          <option>SYDNEY</option>
          <option>MELBOURNE</option>
          <option>BRISBANE</option>
          <option>PERTH</option>
        </Input>
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="Day">
        Day
        </Label>
        <Input
          id="Day"
          placeholder="Select day"
          type="select"
          error={error.day}
          value={timesheet.day}
          onChange={(e) => setTimesheet({...timesheet, day: e.target.value })}
          required
        >
          <option></option>
          <option>MONDAY</option>
          <option>TUESDAY</option>
          <option>WEDNESDAY</option>
          <option>THURSDAY</option>
          <option>FRIDAY</option>
      </Input>
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="am_pm_eve">
        AM/PM/EVE
        </Label>
        <Input
          id="am_pm_eve"
          placeholder=""
          type="select"
          error={error.am_pm_eve}
          value={timesheet.am_pm_eve}
          onChange={(e) => setTimesheet({...timesheet, am_pm_eve: e.target.value })}
          required
          >
          <option></option>
          <option>AM</option>
          <option>PM</option>
          <option>EVE</option>

        </Input>
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="time">Time</Label>
        <Input id="time" placeholder="" type="text" error={error.time} value={timesheet.time}
          onChange={(e) => setTimesheet({...timesheet, time: e.target.value })} required />
      </FormGroup>
    </Col>
</Row>
  <FormGroup>
    <Label for="group">Group</Label>
    <Input id="group" placeholder="Select group" type="text" error={error.group} value={timesheet.group}
      onChange={(e) => setTimesheet({...timesheet, group: e.target.value })} />
  </FormGroup>
 



                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    </Fragment>
    );
};

export default InputTodo;