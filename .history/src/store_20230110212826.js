import { createStore } from 'redux'



//
// const [counter ,setCounter] = useState(0)

const reducerFunction = (state = { counter : 0 } , action) => {


    return state ;
}



const store = createStore(reducerFunction) ;

export default store ;


// Store