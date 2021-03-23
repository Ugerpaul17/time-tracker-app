import React from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/Modal.module.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h4 className={styles.title}>{props.title}</h4>
        </div>
        <div className={styles.body}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Check
              inline
              label="Admin"
              type="radio"
              aria-label="radio 1"
            />
            <Form.Check
              inline
              label="User"
              type="radio"
              aria-label="radio 2"
            />
          </Form>
        </div>
        <div className={styles.footer}>
          <button onClick={props.onClose} className={styles.button}>
            Close
          </button>
          <button className={styles.button}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
