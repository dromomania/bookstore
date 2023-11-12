import { Button, Card } from 'react-bootstrap';


const CardSm = () => {
    return (
      <Card style={{ width: '14rem', border: 'none' }}>
        <Card.Img  style={{height: '14rem'}} className="rounded" variant="top" src="https://m.media-amazon.com/images/I/81FE1DUxvvL._AC_UF1000,1000_QL80_.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text className="fw-weight-bold fs-5 d-flex justify-content-between">
            $20
            <button style={{border: 'none', background: 'none'}}><i className="bi bi-heart"></i></button>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button style={{borderRadius: '0'}} variant="secondary" className="w-100"><i className="bi bi-cart4 me-2"></i>Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }

export { CardSm }
