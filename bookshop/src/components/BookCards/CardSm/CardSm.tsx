import { Button, Card } from 'react-bootstrap';
import { ICardInfo, ICartItem } from '../../../types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action-creators';

const CardSm = (props: ICardInfo) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({quantity: 1, book: props}))
  }

  return (

    <Card style={{ width: '14rem', height: '30rem', border: 'none' }}>
      <Link className='text-decoration-none' style={{ cursor: 'pointer' }} to={`/${props?.isbn13 ?? ""}`}>
        <Card.Img style={{ height: '14rem' }} className="rounded" variant="top" src={props?.image ?? ""} />
        <Card.Body>
          <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props?.title ?? ""}</Card.Title>
          <Card.Text className="fw-weight-bold fs-5 d-flex justify-content-between">
            <span>{props?.price ?? ""}</span>
            <button style={{ border: 'none', background: 'none' }}><i className="bi bi-heart"></i></button>
          </Card.Text>
        </Card.Body>
      </Link>
      <Card.Body>
        <Button onClick={handleAddToCart} style={{ borderRadius: '0' }} variant="secondary" className="w-100"><i className="bi bi-cart4 me-2"></i>Add to cart</Button>
      </Card.Body>

    </Card>


  );
}

export { CardSm }
