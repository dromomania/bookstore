import { Button, Card, Container, InputGroup, Row } from "react-bootstrap"



const SelectedBook = () => {
  return (
    <Container>
      <Card className="d-flex flex-row">
        <Card.Img style={{ height: '40rem' }} src="https://m.media-amazon.com/images/I/81FE1DUxvvL._AC_UF1000,1000_QL80_.jpg" />
        <Card.Body d-flex flex-column>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text className="fw-weight-bold fs-5 d-flex justify-content-between">
            $20
            <button style={{ border: 'none', background: 'none' }}><i className="bi bi-heart"></i></button>
          </Card.Text>
          <Card.Text>When magic has gone from the world, and a vicious king rules from his throne of glass, an assassin comes to the castle. She does not come to kill, but to win her freedom. If she can defeat twenty-three killers, thieves, and warriors in a competition to find the greatest assassin in the land, she will become the king’s champion and earn her freedom. Her name is Celaena Sardothien – beautiful, deadly, and destined for greatness.
          </Card.Text>
          <div className="number d-flex gap-2">
            <button className="number-minus" type="button">-</button>
            <input type="number" min="0" value="1" readOnly></input>
            <button className="number-plus" type="button">+</button>
          </div>
          <Row>
            <Card.Body className="d-flex justify-content-center gap-2">
              <Button style={{ width: '20rem' }}>Add to cart</Button>
              <Button style={{ width: '20rem' }}>To favorites</Button>
            </Card.Body>
          </Row>
        </Card.Body>

      </Card>
    </Container >
  )
}

export { SelectedBook }
