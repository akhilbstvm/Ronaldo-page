import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <div id = 'inputfeild' className='mt-3 text-center'>
      <h1 className='text-center text-white'>Contact</h1>
    <div className='row container'>
      <div className='col-md-6 mb-3 container '><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="enter your name" />
        </Form.Group></div>
        <div className='col-md-6 mb-3 container '><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="enter email ID" />
      </Form.Group></div>
      </div>
      <Form.Group className="mb-3 container" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} placeholder="Your messege"/>
      </Form.Group>
      <span><Button variant="primary">Send Messege</Button></span>
    
    </div>
  );
}

export default Contact;