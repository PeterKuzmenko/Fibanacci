import {createStore, combineReducers} from 'redux'

import {numReducer} from './reducers/numReducer'

const rootReducer = combineReducers({
  fibanacci: numReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
