import Toast from 'react-bootstrap/Toast';
import './Toast.css';

function LoginToast(props) {
  return (
    <Toast className='LoginToast position-absolute bg-danger bg-opacity-25' onClose={()=>props.setShow(false)} show={props.toastShow} delay={2000} autohide>
      <Toast.Header className='bg-danger'>
        <strong className="me-auto text-light">Login Error</strong>
      </Toast.Header>
      <Toast.Body className='text-light fw-light'>username or password is incorrect!!</Toast.Body>
    </Toast>
  );
}

export default LoginToast;