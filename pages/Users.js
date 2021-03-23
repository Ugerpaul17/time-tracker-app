import React, { useState } from 'react';
import Layout from "../components/Layout";
import { Container, Button, Table, Row, Col} from "react-bootstrap";
import styles from "../styles/Users.module.css";
import Modal from "../components/Modal";

export const Users = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col>
              <p>Users</p>
              <Button onClick={() => setShow(true)} className={styles.btn}>Add User</Button>
              <Modal title="Add User" onClose={() => setShow(false)} show={show} />
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>admin</td>
                    <td>19/3/2021</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>user</td>
                    <td>19/3/2021</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>user</td>
                    <td>19/3/2021</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>user</td>
                    <td>19/3/2021</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>user</td>
                    <td>19/3/2021</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Users;
