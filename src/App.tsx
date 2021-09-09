import {FC, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

import {useTypedSelector} from './hooks/useTypedSelector'
import {NumTypes} from './store/reducers/numReducer'
import './App.css'

const SButton = styled.button`
    cursor: pointer;
    min-width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .5);
    transition: .3s;

    &:hover {
      background: #ddd;
    }
  `

const App: FC = () => {
  const {num, prevNum} = useTypedSelector(({num}) => num)
  const dispatch = useDispatch()

  const generateNextFibanacci = useCallback(() => {
    let payload = num === 0 ? 1 : num + prevNum

    dispatch({type: NumTypes.SET_NUM, payload})
  }, [num, prevNum, dispatch]);

  return (
    <div className="App">
      <h1>Fibanachi numbers</h1>
      <h2>{num.toLocaleString('ru-RU')}</h2>
      <SButton onClick={generateNextFibanacci} >
        Generate number
      </SButton>
    </div>
  )
}

export default App
