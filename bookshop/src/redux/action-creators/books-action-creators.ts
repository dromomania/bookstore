import { ICardInfo, ICardsResponse } from "../../types";
import { getToken } from "../../utils";
import { SET_CARDS, LOAD_CARDS, SET_SELECTED_CARD, LOAD_CARD as LOAD_BOOK, SET_SEARCH, SET_CURRENT_PAGE, SET_TOTAL_PAGES, LOAD_PAGE } from "../action-types";
import { takeEvery, put } from 'redux-saga/effects'

const setCards = (cards: ICardInfo[]) => ({
    type: SET_CARDS,
    cards: cards,
})

const loadCards = (searchInfo: any) => ({
    type: LOAD_CARDS,
    searchInfo,
})

const loadCard = (isbn: string) => ({
    type: LOAD_BOOK,
    isbn,
})

const setSelectedCard = (card: ICardInfo) => ({
    type: SET_SELECTED_CARD,
    card,
})

const setSearch = (search: string) => ({
    type: SET_SEARCH,
    search,
})

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

const setTotalPages = (total: number) => ({
    type: SET_TOTAL_PAGES,
    total
})

const loadPage = (pageNumber: any) => ({
    type: LOAD_PAGE,
    pageNumber
})

function* fetchCards(action: any) {
    console.log('loading cards')
    const resp: Response = yield fetch(`https://api.itbook.store/1.0/new`)
    const data: ICardsResponse = yield resp.json();
    yield put(setCards(data.books))
    // yield put(setTotalPages(data.count))
}

function* fetchLoadPage(action: any) {
    // console.log('loading page')
    // const { pageNumber } = action
    // const resp: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=${(pageNumber - 1) * 11 + 1}`)
    // const data: ICardsResponse = yield resp.json();
    // yield put(setCards(data.results))
    // yield put(setTotalPages(data.count))
}

function* fetchLoadBook(action: any) {
    const { isbn } = action
    const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${isbn}`)
    const post: ICardInfo = yield response.json();
    yield put(setSelectedCard(post))
}

function* watcherPost() {
    yield takeEvery(LOAD_CARDS, fetchCards)
    yield takeEvery(LOAD_BOOK, fetchLoadBook)
    yield takeEvery(LOAD_PAGE, fetchLoadPage)
}

export {

    setSelectedCard,
    setCards,
    setCurrentPage,
    setTotalPages,
    loadCards,
    loadCard,
    loadPage,
    setSearch,
    watcherPost,

}
