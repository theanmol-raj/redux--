import { useState } from "react"

function C1(){
  return <div>

  </div>
}

function C2(){
  return <div>

  </div>
}
function C3(){
  return <div>

  </div>
}
function C4(){
  return <div></div>
}





function App() {
  const [va ,setVa] = useState("Anmol")
  return (
    <div className="App">
      <h1>Hello {va}</h1>
    </div>
  );
}

export default App;
