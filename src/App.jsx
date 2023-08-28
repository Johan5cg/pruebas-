import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemon from "./Pokemon"
import PokemonDetalle from "./PokemonDetalle"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetalle />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
