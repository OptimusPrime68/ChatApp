import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/login.css";

function Login() {
  return (
    <div className="login">
      <Card className="loginform">
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <hr></hr>
          <Card.Text>
            <div className="row mb-3 mt-3">
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
            <div className="row">
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
          </Card.Text>
          <Button variant="primary" className="mb-3 mt-3">
            Sign In
          </Button>
          <hr></hr>
          <br></br>
          <p>
            Not a member? <a href="/register">Sign Up</a>
          </p>
          <p>
            Forgot <a href="/forgot">Password?</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
