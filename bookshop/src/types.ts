interface ICardInfo {
  error?: string,
  title: string,
  subtitle: string,
  authors?: string,
  publisher?: string,
  isbn10?: string,
  isbn13: string,
  pages?: string,
  year?: string,
  rating?: string,
  desc?: string,
  price: string,
  image: string,
  url: string,
  pdf?: {}
}

interface ICartItem
{
  quantity: number,
  book: ICardInfo
}

interface ICartInfo
{
  cartItems: ICartItem[]
}

interface IStoreState {
  cards: ICardsState,
  user: IUserState,
  cart: ICartInfo,
}

interface IUserInfo {
  id: number,
  username: string,
  email: string,
}

interface IRegistrationActivation {
  uid: string,
  token: string,
}

interface ISignUp {
  username: string,
  email: string,
  password: string,
}

interface ISignIn {
  email: string,
  password: string,
}

interface ITokensResponse {
  refresh: string,
  access: string,
}

interface ICardsResponse {
  total: number,
  books: ICardInfo[],
}

interface ICardsState {
  cards: ICardInfo[],
  selectedCard: ICardInfo | null,
}

interface IUserState {
  user: IUserInfo | null,
}

export {
  type ICardInfo,
  type ICartInfo,
  type ICartItem,
  type IUserInfo,
  type IUserState,
  type IStoreState,
  type ICardsState,
  type IRegistrationActivation,
  type ISignUp,
  type ISignIn,
  type ITokensResponse,
  type ICardsResponse,
}

