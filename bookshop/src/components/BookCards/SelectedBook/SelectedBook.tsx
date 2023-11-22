import { Button, Card, Container, InputGroup, Row } from "react-bootstrap"
import React from "react"
import { useRef } from 'react';
import { ICardInfo } from "../../../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action-creators";


const SelectedBook = (props: ICardInfo | null) => {

  const myRef : React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const quantity = parseInt(myRef.current?.value ?? "")
    if (props !== null && props !== undefined && !isNaN(quantity))
      dispatch(addToCart({quantity: quantity, book: props}))
  }

  const handleIncrease = () => {
    if (myRef.current !== null)
    {
      const newValue = parseInt(myRef.current.value) + 1
      if (!isNaN(newValue))
        myRef.current.value = newValue.toString();
    }
  };

  const handleDecrease = () => {
    if (myRef.current !== null)
    {
      const newValue = parseInt(myRef.current.value) - 1
      if (!isNaN(newValue))
        myRef.current.value = newValue.toString();
    }
  };

return (
  <Container>
    <Card className="d-flex flex-row">
      <Card.Img style={{ height: '40rem' }} src={props?.image ?? ""} />
      <Card.Body d-flex flex-column>
        <Card.Title>{props?.title ?? ""}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className="fw-weight-bold fs-5 d-flex justify-content-between">
          <span>{props?.price ?? "" }</span>
          <button style={{ border: 'none', background: 'none' }}><i className="bi bi-heart"></i></button>
        </Card.Text>
        <Card.Text>{props?.desc ?? ""}
        </Card.Text>
        <div className="number d-flex gap-2">
          <button onClick={handleDecrease} className="number-minus" type="button">-</button>
          <input ref={myRef} type="number" min="0" value="1" readOnly />
          <button onClick={handleIncrease} className="number-plus" type="button">+</button>
        </div>
        <Row>
          <Card.Body className="d-flex justify-content-center gap-2">
            <Button onClick={handleAddToCart} style={{ width: '20rem' }}>Add to cart</Button>
            <Button style={{ width: '20rem' }}>To favorites</Button>
          </Card.Body>
        </Row>
      </Card.Body>

    </Card>
  </Container >
)
}

export { SelectedBook }
