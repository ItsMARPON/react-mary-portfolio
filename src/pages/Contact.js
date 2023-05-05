import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { validEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [textarea, setTextarea] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setTextarea(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!fullName) {
      setErrorMessage("Name must be provided");
      return;
    }
    if (!textarea) {
      setErrorMessage("Message cannot be blank");
      return;
    }

    alert(`Hello ${fullName}, thank you for submitting a message`);

    setFullName("");
    setEmail("");
    setTextarea("");
  };

  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="form-name">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control
          type="text"
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          placeholder="First Last"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="name@example.com"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-Textarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={textarea}
          name="textarea"
          onChange={handleInputChange}
          placeholder="Feedback or Questions are appreciated"
          required
        />
      </Form.Group>
      <Button type="submit" onClick={handleFormSubmit} variant="primary">
        Submit
      </Button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Form>
  );
}

export default Contact;
