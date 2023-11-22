import { ICardInfo } from "../../types"
import { SET_CARDS, SET_SELECTED_CARD, SET_SEARCH, SET_SEARCH_CARDS } from "../action-types";

const initialState = {
  cards: [] as ICardInfo[],
  selectedCard: null as ICardInfo | null,
  search: null as string | null
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
        case SET_SEARCH: {
            console.log(action.search)
            return ({
                ...state,
                search: action.search
            })
        }
        case SET_SEARCH_CARDS: {
            return ({
                ...state,
                cards: action.cards
            })
        }


        default: {
            return state;
        }
    }
}

export { cardsReducer }
