import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { loadSearchCards } from "../../redux/action-creators"
import { loadCards } from "../../redux/action-creators"
import { ICardInfo } from "../../types"
import { Row, Col } from "react-bootstrap"
import { CardSm } from "../../components"


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

const SearchPage = () => {
  const search = useSelector((state: IStoreState) => state.cards?.search)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadSearchCards(search))
  }, [search, dispatch]);

  const cards = useSelector((state: IStoreState) => state.cards.cards)
  // useEffect(() => {
  //   dispatch(loadCards())
  // });

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
export { SearchPage }
