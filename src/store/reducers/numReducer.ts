export enum NumTypes {
  SET_NUM = 'SET_NUM'
}

interface NumState {
  num: number
  prevNum: number
}

interface NumAction {
  type: NumTypes
  payload: number
}

const initialState: NumState = {
  num: 0,
  prevNum: 0
}

export const numReducer = (state = initialState, action: NumAction): NumState => {
  switch (action.type) {
    case NumTypes.SET_NUM:
      return {...state, num: action.payload, prevNum: state.num}
    default: 
      return state
  }
}
