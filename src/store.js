import {combineReducers, createStore} from 'redux'
import recipeReducer from './reducers/recipeReducer'

const rootReducer = combineReducers({
	recipeReducer
})

const store = createStore(rootReducer)

export default store