import { Card, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Card style={{ width: "300px" }}>
      <Card.Header style={{ fontSize: "20px", textAlign: "center" }}>
        Loading...
      </Card.Header>
      <Card.Body style={{ textAlign: "center" }}>
        <Spinner animation="grow" variant="primary" />
      </Card.Body>
    </Card>
  );
}
