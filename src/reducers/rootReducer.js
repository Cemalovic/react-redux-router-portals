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
  ]
}

const rootReducer = (state = initialState, action) => {
  return state
}

export default rootReducer
