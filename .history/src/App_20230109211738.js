import { useState } from "react"

function C1({va}){
  return <div>
    <h1>C1</h1>
    <C2 va={va} />
  </div>
}

function C2({va}){
  return <div>
      <h1>C2</h1>
      <C3 va={va} />
  </div>
}
function C3({va}){
  return <div>
      <h1>C3</h1>
      <C4 va={va} />
  </div>
}
function C4({va}){
  return <div>
    {/* hi again {va} */}
    <p>hi again {}</p>
  </div>
}





function App() {
  const [va ,setVa] = useState("Anmol")
  return (
    <div className="App">
      <h1>Hello {va}</h1>
      <C1 va={va} />
    </div>
  );
}

export default App;
