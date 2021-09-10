import {FC} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

import {useTypedSelector} from './hooks/useTypedSelector'
import {NumTypes} from './store/reducers/numReducer'
import Output from './components/Output'
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
  const {num, prevNum} = useTypedSelector(({fibanacci}) => fibanacci)
  const dispatch = useDispatch()

  const generateNextFibanacci = () => {
    let payload = num === 0 ? 1 : num + prevNum

    dispatch({type: NumTypes.SET_NUM, payload})
  }

  return (
    <div className="App">
      <h1>Fibanachi numbers</h1>
      <Output>{num.toLocaleString('ru-RU')}</Output>
      <SButton onClick={generateNextFibanacci}>
        Generate number
      </SButton>
    </div>
  )
}

export default App
