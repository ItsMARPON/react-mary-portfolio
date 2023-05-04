import Form from 'react-bootstrap/Form';
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
      <form className='form'>
      <Form.Group className="mb-3" controlId="form-name">
        <Form.Label>Your Full Name</Form.Label>
          <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="fullname"
          />
        <Form.Control type="name" placeholder="First Last" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-email">
        <Form.Label>Email:</Form.Label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          />
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-Textarea1">
        <Form.Label>Comments:</Form.Label>
        <input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="comment"
          />
        <Form.Control as="textarea" rows={3} placeholder='Feedback or Questions are appreciated'/>
        <button className='btn btn-primary'>Submit</button>
      </Form.Group>
      <button type='button' onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
      <div>
      <p className='error-text'>{errorMessage}</p>
      </div>
    )}
    </Form>

  );

};



export default Contact;