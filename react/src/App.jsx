import A from "./components/A"
import B from "./components/B"
import C from "./components/C"

const App = () => {

  return (
    <div>
      <A />
      <B />
      <C />
    </div>
  );
  
  /*const handleClick= (e) => {
    console.log(e)
  }

  const code = (
    <>
    <h1 style={{background:"green", color:"white"}}>hola</h1>
    <div onClick={handleClick}>JSJSJSJSJSJ</div>
    </>
  )

  return <div>{code}</div>
  */

}
export default App