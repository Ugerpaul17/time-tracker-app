import Layout from "../components/Layout";
import { Container, Card, Table, Row, Col } from "react-bootstrap";

export const Users = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col>
              <p>Users</p>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
            <Col>
              <p>Table</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
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
