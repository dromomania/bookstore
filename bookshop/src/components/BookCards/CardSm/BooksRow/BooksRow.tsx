import { Container, Row } from "react-bootstrap";
import { CardSm } from "../CardSm";

const BooksRow = () => {
  return (
    <Container>
      <Row className="d-flex gap-3 justify-content-center">
        <CardSm />
        <CardSm />
        <CardSm />
        <CardSm />
        <CardSm />
      </Row>
    </Container>
  )
}

export { BooksRow }
