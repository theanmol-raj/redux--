import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'


function App() {
  const x = useSelector(store => store)
  console.log(x)

  return (
    <div>
      <h1>My counter App</h1>
      {/* <h3>{counter}</h3> */}
      {/* Store  */}
      {/* Dispatch */}
      {/* Reducers      */}
      {/* Actions */}
    </div>
  )
}

export default App