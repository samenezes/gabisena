export default App
import './App.css'

function App() {
  function primaryRequest() {
    const valores= fetch('https://opentdb.com/api.php?amount=30&category=15').then(batata=>{

    batata.json().then(bacon=>{

        console.log(bacon.data)

    }) 
})
      
}

primaryRequest()
  return (
    <>
    <h1>Leitura de API</h1>
    <div>
    <button onClick={(primaryRequest)} id="botao">Clique Aqui</button>
    </div>
    </>
  )
}

export default App
