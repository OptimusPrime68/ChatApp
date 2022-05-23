import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Forgot() {
  return (
    <div className="login">
      <Card className="loginform">
        <Card.Body>
          <Card.Title>Forgot Password</Card.Title>
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
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </Card.Text>
          <Button variant="primary" className="mb-3">
            Send Email
          </Button>
          <hr></hr>
          <br></br>
          <p>
            Not a member? <a href="/register">Sign Up</a>
          </p>
          <p>
            Already a member? <a href="/">Sign In</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Forgot;
