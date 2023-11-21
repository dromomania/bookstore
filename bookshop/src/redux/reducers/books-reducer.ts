import { ICardInfo } from "../../types"
import { SET_CARDS, SET_SELECTED_CARD } from "../action-types";

const initialState = {
  cards: [] as ICardInfo[],
  selectedCard: null as ICardInfo | null
}

const cardsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CARDS: {
            return ({
                ...state,
                cards: action.cards,
            })
        }
        case SET_SELECTED_CARD: {
            return ({
                ...state,
                selectedCard: action.card,
            })
        }
        // case SET_CURRENT_PAGE: {
        //     return ({
        //         ...state,
        //         currentPage: action.currentPage
        //     })
        // }
        // case SET_TOTAL_PAGES: {
        //     return ({
        //         ...state,
        //         total: action.total
        //     })

        default: {
            return state;
        }
    }
}

export { cardsReducer }
