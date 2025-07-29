import { useRef, useState } from "react";

const Grados = () => {
  const nombreRef = useRef();
  const [resultadoGrados, setResultadoRef] = useState();

  const calcular = () => {
    const grados = nombreRef.current.value;
    const resultadoRef = (grados * 9) / 5 + 32;
    setResultadoRef(resultadoRef)
  }

  return <div>
  <input type="number" ref={nombreRef} />
  <button onClick={calcular}>Calcular</button>
  <output> {resultadoGrados}</output>
</div>
}

export default Grados;