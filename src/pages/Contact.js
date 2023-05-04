import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { validEmail } from '../utils/helpers';


function Contact() {

const [email, setEmail] = useState('');
const [fullName, setFullName] = useState('')
const [comment, setComment] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange =(e) => {
  const {target} =e;
  const inputType = target.name;
  const inputValue = target.value;

  if(inputType === 'email'){
    setEmail(inputValue);
  } else if (inputType === 'fullname') {
    setFullName(inputValue);
  } else{
    setComment(inputValue);
  }

};

const handleFormSubmit = async (e) => {
  e.preventDefault();

  if(!validEmail(email) || !fullName){
    setErrorMessage('Email or FullName is invalid');
    return;
  }
  if(!comment){
    setErrorMessage('Comment cannot be blank');
    return;
  }
  alert(`Hello ${fullName}`);

  setFullName('');
  setEmail('');
  setComment('');
  };

  return (
    <Form className='form-container'>
      <Form.Group className="mb-3" controlId="form-name">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="text" onChange={handleInputChange} placeholder="First Last" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" onChange={handleInputChange} placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-Textarea1">
        <Form.Label>Comments:</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleInputChange} placeholder='Feedback or Questions are appreciated' required/>
      </Form.Group>
      <Button type='submit' onClick={handleFormSubmit} variant="primary">Submit</Button>
      {errorMessage && (
      <div>
      <p className='error-text'>{errorMessage}</p>
      </div>
    )}
    </Form>

  );

};



export default Contact;