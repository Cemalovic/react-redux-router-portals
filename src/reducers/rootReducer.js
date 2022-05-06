const initialState = {
  cards: [
    {
      id: 1,
      title: 'Alex',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus libero illum ducimus unde consectetur aspernatur accusantium harum voluptas nostrum.'
    },
    {
      id: 2,
      title: 'Willma',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus libero illum ducimus unde consectetur aspernatur accusantium harum voluptas nostrum.'
    },
    {
      id: 3,
      title: 'John',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus libero illum ducimus unde consectetur aspernatur accusantium harum voluptas nostrum.'
    }
  ],
  users: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => action.id !== card.id)
      return {
        ...state,
        cards: newCard
      }
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
