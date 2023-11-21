import { Container, Row } from "react-bootstrap";
import { CardSm } from "../CardSm";
import { ICardInfo } from "../../../../types";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCards } from "../../../../redux/action-creators";

const BooksRow = (props: ICardInfo[]) => {
  const search = undefined// useSelector((state: IStoreState) => state.cards.search)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCards({
      search
    }))
  }, [search]);

  return (
    <Container>
      <Row className="d-flex gap-3 justify-content-center">
        {CardSm(props[0])}
        {CardSm(props[1])}
        {CardSm(props[2])}
        {CardSm(props[3])}
      </Row>
    </Container>
  )
}

export { BooksRow }
