import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(rootReducer, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
