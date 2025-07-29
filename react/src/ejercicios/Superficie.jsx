import { useState } from "react";

const Superficie = () => {
  const [anchoRef, setAnchoRef] = useState();
  const [altoRef, setAltoRef] = useState();
  const [resultadoRef, setResultadoRef] = useState();

  const calcular = () => {
    setResultadoRef(anchoRef * altoRef)

  }

  return (
    <div>
    <input type="number" onChange={e => setAltoRef(e.target.value)} />
    <input type="number" onChange={e => setAnchoRef(e.target.value)} />
    <button onClick={calcular}>Calcular</button>
    <p>{resultadoRef}</p>
  </div>
  )
}

export default Superficie;