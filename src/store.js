import {createStore} from 'redux'
import EtsyPageReducer from './reducers/EtsyPageReducer'

const store = createStore(EtsyPageReducer)

export default store