import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/register.css";

function Register() {
  return (
    <div className="register">
      <Card className="registerform">
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <hr></hr>
          <Card.Text>
            <div className="row mb-3 mt-3">
              <div className="col-md-2 mb-2">
                <img src="./person.svg" alt="name" height={42} width={50} />
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2 mb-2">
                <img src="./email.svg" alt="email" height={42} width={50} />
              </div>
              <div className="col-md-10">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2 mb-2">
                <img src="./lock.svg" alt="lock" height={35} width={50} />
              </div>
              <div className="col-md-10">
                <input
                  type="password"
                  className="form-control"
                  id="InputPass"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 mb-2">
                <img
                  src="./danger.svg"
                  alt="confirmpass"
                  height={42}
                  width={50}
                />
              </div>
              <div className="col-md-10">
                <input
                  type="password"
                  className="form-control"
                  id="InputConfirmPass"
                  placeholder="Confirm your Password"
                />
              </div>
            </div>
          </Card.Text>
          <Button variant="primary" className="mt-3 mb-3">
            Sign Up
          </Button>
          <hr></hr>
          <br></br>
          <p>
            Already a member? <a href="/">Sign In</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
