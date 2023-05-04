import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Form className='form-container'>
      <Form.Group className="mb-3" controlId="form-name">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="name" placeholder="First Middle Last" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-Textarea1">
        <Form.Label>Comments:</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Feedback or Questions are appreciated'/>
        <button className='btn btn-primary'>Submit</button>
      </Form.Group>
    </Form>
  );
}

export default Contact;