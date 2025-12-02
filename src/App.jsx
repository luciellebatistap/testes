import { useState } from 'react'
import './App.css'

function App() {
const [contador, setContador] = useState(0) 
   const aumentar = () => {
    setContador(contador + 1);
   }
  return (
    <div>
      <h1>contador: {contador}</h1>
      <button onClick ={aumentar}>Aumentar</button>
    </div>
  )
}

export default App;
