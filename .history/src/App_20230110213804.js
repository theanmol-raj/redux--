import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'


function App() {
  const {counter} = useSelector(store => store)
  // console.log(x)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch ({ type : "Increment" })
  }

  const Add = (x) => {
    dispatch ({ type : "Increment" ,payload : x })
  }

  return (
    <div>
      <h1>My counter App</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      {/* Store  */}
      {/* Dispatch */}
      {/* Reducers      */}
      {/* Actions */}
    </div>
  )
}

export default App