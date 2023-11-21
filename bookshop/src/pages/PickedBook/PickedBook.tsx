import { Container } from "react-bootstrap";
import { SelectedBook } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ICardInfo, IStoreState } from "../../types";
import { useDispatch } from "react-redux";
import { loadCard } from "../../redux/action-creators";
import { useSelector } from "react-redux";

const PickedBook = () => {
  const { isbn } = useParams();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCard(isbn ?? ""))
  }, [isbn]);

  const book = useSelector((state: IStoreState) => state.cards.selectedCard)

  return (
    <Container>
      {SelectedBook(book)}
    </Container>

  )
}

export { PickedBook }

