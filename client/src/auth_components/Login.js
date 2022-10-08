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
              {/* Tab Login Content */}
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
                <Form.Floating className="mb-4">
                  <Form.Control type="email" name="email" id="floatingInputEmail" placeholder="name@example.com" value={email}  onChange={e => onChange(e)} /> 
                  <label htmlFor="floatingInputEmail" >Email Address</label>
                </Form.Floating>
                {/* Password input */}
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4"  >
                  <Form.Control type="password" name="password" placeholder="Password"  value={password} onChange={e => onChange(e)}/> 
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
                  <p>Not a member? Please Register</p>
                </div>
              </form>
            </div>
        </Fragment>
    );
};

export default Login;