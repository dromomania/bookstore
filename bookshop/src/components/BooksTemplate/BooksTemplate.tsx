import { CardSm } from "../BookCards"
import { ICardInfo, IStoreState } from "../../types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { loadCards } from "../../redux/action-creators";
import { useEffect } from 'react';

const splitCards = (arr: ICardInfo[]): ICardInfo[][] => {
  const resultArr: ICardInfo[][] = [];
  const BlockLength: number = 4
  resultArr.push(arr.slice(0, BlockLength));

  let offset: number = BlockLength;
  while (offset < arr.length) {
    resultArr.push(arr.slice(offset, offset + BlockLength));
    offset += BlockLength;
  }
  return resultArr;

}

const BooksTemplate = () => {

  const cards = useSelector((state: IStoreState) => state.cards.cards)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCards())
  });

  return (
    <div>
      {splitCards(cards).map((el: ICardInfo[], i: number) => <Row>
        <Col key={i} className="d-flex gap-3 justify-content-center">
          {CardSm(el[0])}{CardSm(el[1])}{CardSm(el[2])}{CardSm(el[3])}
        </Col>
      </Row>)}
    </div>
  )


}

export { BooksTemplate }
