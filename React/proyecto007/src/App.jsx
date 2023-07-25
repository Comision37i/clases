import Dado from './Dado';

function App() {
  const valor1 = Math.trunc(Math.random()*6)+1
  const valor2 = Math.trunc(Math.random()*6)+1
  const valor3 = Math.trunc(Math.random()*6)+1
  const valor4 = Math.trunc(Math.random()*6)+1

  return(
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <Dado valor={valor4}/>
    </div>
  )
}

export default App;