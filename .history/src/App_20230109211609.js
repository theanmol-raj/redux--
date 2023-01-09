import { useState } from "react"

function C1(){
  return <div>
    <h1>C1</h1>
  </div>
}

function C2(){
  return <div>
      <h1>C2</h1>
  </div>
}
function C3(){
  return <div>
      <h1>C3</h1>
  </div>
}
function C4(va){
  return <div>
    hi again {va}
  </div>
}





function App() {
  const [va ,setVa] = useState("Anmol")
  return (
    <div className="App">
      <h1>Hello {va}</h1>
      <C1 />
    </div>
  );
}

export default App;
