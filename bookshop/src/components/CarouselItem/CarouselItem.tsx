import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { CardSm } from '../BookCards';
import { ICardInfo } from '../../types'
import { useDispatch } from 'react-redux'
import { loadCards } from '../../redux/action-creators'

const CarouselItem = (props: ICardInfo[]) => {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(loadCards()) })

  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption style={{ color: 'black', textAlign: 'right', marginLeft: '25%', width: '50%', paddingTop: '300px' }} className='d-flex flex-column align-items-center'>
        {<Card.Title
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {props[0]?.title ?? ""}
          </Card.Title>}
        </Carousel.Caption>
        {<Card.Img
          style={{ height: '30rem', width: '30rem', fontSize: '20rem', fontWeight: 'bold' }} className="rounded"
          variant="top"
          src={props[0]?.image ?? ""} />}
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption style={{ color: 'black', textAlign: 'right', marginLeft: '25%', width: '50%', paddingTop: '300px' }}>
        {<Card.Title
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {props[1]?.title ?? ""}
          </Card.Title>}
        </Carousel.Caption>
        {<Card.Img
          style={{ height: '30rem', width: '30rem', fontSize: '20rem', fontWeight: 'bold' }} className="rounded"
          variant="top"
          src={props[1]?.image ?? ""} />}
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption style={{ color: 'black', textAlign: 'right', marginLeft: '25%', width: '50%', paddingTop: '300px' }}>
        {<Card.Title
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {props[2]?.title ?? ""}
          </Card.Title>}
        </Carousel.Caption>
        {<Card.Img
          style={{ height: '30rem', width: '30rem', fontSize: '20rem', fontWeight: 'bold' }} className="rounded"
          variant="top"
          src={props[2]?.image ?? ""} />}
      </Carousel.Item>
    </Carousel>
  );
}

export { CarouselItem };
