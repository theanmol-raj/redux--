import { useState ,createContext ,useContext } from "react"



const Env = createContext () ;

function C1(){
  return <div>
    <h1>C1</h1>
    <C2  />
  </div>
}

function C2(){
  return <div>
      <h1>C2</h1>
      <C3  />
  </div>
}
function C3(){
  return <div>
      <h1>C3</h1>
      <C4  />
  </div>
}
function C4(){
  const va = useContext(Env);
  return <div>
    {/* hi again {va} */}
    <p>hi again {va}</p>
  </div>
}





function App() {
  const [va ,setVa] = useState("Anmol")
  return (
    <Env.Provider value={va} >
      <div className="App">
      <h1>Hello {va}</h1>
      <C1 />
    </div>
    </Env.Provider>
  );
}

export default App;
