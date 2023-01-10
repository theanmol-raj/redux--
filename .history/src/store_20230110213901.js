import { createStore } from 'redux'



//
// const [counter ,setCounter] = useState(0)

const reducerFunction = (state = { counter : 0 } , action) => {

    if(action.type === "Increment") {
        return { counter : state.counter + 1}
    }
    if(action.type === "ADD") {
        return { counter : state.counter + action.payload}
    }


    return state ;
}



const store = createStore(reducerFunction) ;

export default store ;


// Store