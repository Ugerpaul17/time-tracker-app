import styles from '../styles/Login.module.css'
import { Form,  Button } from 'react-bootstrap';


function Login() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>
        <h2>Sign In</h2>
      </div> */}
      <Form>
        <Form.Group className={styles.group}>
          <Form.Control placeholder="Email" />
          <Form.Group />
          <Form.Group>
            <Form.Control placeholder="Password" />
          </Form.Group>
            <Button>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login