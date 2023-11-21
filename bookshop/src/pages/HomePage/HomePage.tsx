import { CarouselItem, Spacer, BooksRow, BooksTemplate } from "../../components"
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"
import { Link } from "react-router-dom"



const HomePage = () => {

  const cards = useSelector((state: IStoreState) => state.cards.cards)
  console.log(cards)

  return (
    <div>
      <CarouselItem />
      <Spacer />
      <Link to={'/books'}>Все книги</Link>


      {BooksRow(cards.slice(0, 4))}
      <BooksTemplate/>
    </div>
  )
}

export { HomePage }
