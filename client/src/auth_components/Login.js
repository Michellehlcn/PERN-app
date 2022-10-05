import React, { Fragment, useState } from "react";
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { FloatingLabel, Form } from "react-bootstrap";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      console.log(body);
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <Fragment>

        <div className="container">
          <div class="row justify-content-md-center">
            <div className="col-4 mt-5  align-self-center">
              <Card class="shadow p-3 mb-5 bg-white rounded" style={{ width: '25rem'}}>
                <Card.Body>
          {/* NAVIGATION */}
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="tab-login"
                    data-mdb-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                    >Login</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                    >Register</a
                  >
                </li>
              </ul>

            {/* CONTENT */}
            <div class="tab-content ">
              
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form onSubmit={onSubmitForm}>
                  <div class="text-center mb-3">
                    <p>Sign in with:</p>
                    <button type="button" class="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faFacebook} />
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle} />
                    </button>
                  </div>

                <p class="text-center">or:</p>
                {/* Email input */}
                <Form.Floating className="mb-4"  >
                  <Form.Control id="floatingInputEmail" placeholder="name@example.com"  value={email} onChange={e => onChange(e)}/> 
                  <label htmlFor="floatingInputEmail" >Email Address</label>
                </Form.Floating>
                {/* Password input */}
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4" onChange={e => onChange(e)} >
                  <Form.Control type="password" placeholder="Password"  value={password} /> 
                </FloatingLabel>
            

                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    {/* Check box */}
                    <div class="form-check mb-3 mb-md-0">
                      <input class="form-check-input" type="checkbox" value="loginCheck" checked />
                      <label class="form-check-label" for="loginCheck">Remember me</label>
                    </div>
                  </div>

                    {/* Forgot Password */}
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href='#!' >Forgot Password?</a>
                  </div>
                </div>
                {/* Submit Button */}
                <button className="btn btn-primary btn-block mb-4">Submit</button>
                {/* Register Button */}
                <div class="text-center">
                  <p>Not a member?<a href="/register">Register</a></p>
                </div>
              </form>
            </div>

            {/* Register Tab */}
            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
              <form>
                <div class="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                {/* Name input */}
                <div class="form-outline mb-4">
                  <input type="text" id="registerName" class="form-control" />
                  <label class="form-label" for="registerName">Name</label>
                </div>

                {/* Username input */}
                <div class="form-outline mb-4">
                  <input type="text" id="registerUsername" class="form-control" />
                  <label class="form-label" for="registerUsername">Username</label>
                </div>

                {/* Email input */}
                <div class="form-outline mb-4">
                  <input type="email" id="registerEmail" class="form-control" />
                  <label class="form-label" for="registerEmail">Email</label>
                </div>

                {/* Password input */}
                <div class="form-outline mb-4">
                  <input type="password" id="registerPassword" class="form-control" />
                  <label class="form-label" for="registerPassword">Password</label>
                </div>

                {/* Repeat Password input */}
                <div class="form-outline mb-4">
                  <input type="password" id="registerRepeatPassword" class="form-control" />
                  <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                </div>

                {/* Checkbox */}
                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    checked
                    aria-describedby="registerCheckHelpText"
                  />
                  <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
              </form>
              </div>
            </div>
        </Card.Body>
        </Card>
        </div>
       </div>
      </div>
        </Fragment>
    );
};

export default Login;