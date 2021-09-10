import {FC, memo} from 'react'

interface Props {
  children: string
}

const Output: FC<Props> = memo(({children}) => {
  return (
    <h2>{children}</h2>
  )
})

export default Output
