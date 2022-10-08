import React, { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
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
        toast.success("Register Successfully");
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

          {/* Register Tab */}

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
                
                {/* Username input */}
                <Form.Floating className="mb-4">
                  <input type="text" id="UserName" name="name" value={name} placeholder="User Name" onChange={e => onChange(e)} className="form-control my-3" />
                  <label class="form-label" for="UserName">User Name</label>
                </Form.Floating>

                {/* Email input */}
                <Form.Floating className="mb-4">
                  <input type="email" id="registerEmail" name="email" value={email} placeholder="Email Address" onChange={e => onChange(e)} className="form-control my-3" />
                  <label class="form-label" for="registerEmail">Email Address</label>
                </Form.Floating>

                {/* Password input */}
                <Form.Floating className="mb-4">
                  <input type="password" id="registerPassword" name="password" value={password} placeholder="Password" onChange={e => onChange(e)} className="form-control my-3"  />
                  <label class="form-label" for="registerPassword">Password</label>
                </Form.Floating>

                {/* Repeat Password input */}
                <Form.Floating className="mb-5">
                  <input type="password" id="registerRepeatPassword" class="form-control" placeholder="Confirm Password" />
                  <label class="form-label" for="registerRepeatPassword">Confirm password</label>
                </Form.Floating>

                {/* Checkbox */}
                <div class="form-check d-flex mb-4">

                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="registerCheck"
                    checked
                  />
                  <label class="form-check-label justify-content-center " for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                </form>
    </Fragment>
  );
};

export default Register;