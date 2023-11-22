import { CarouselItem, Spacer, BooksRow} from "../../components"
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadCards } from "../../redux/action-creators"

const HomePage = () => {

  const cards = useSelector((state: IStoreState) => state.cards.cards)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(loadCards())})
  return (
    <Container className="mt-5">
      {CarouselItem (cards)}
      <Spacer />
      {BooksRow(cards.slice(0, 4))}
      <Link className="text-decoration-nonefw-bold d-flex align-items-center justify-content-center" style={{ color: 'gray' }} to={'/books'}>View all books...</Link>
    </Container>
  )
}

export { HomePage }
