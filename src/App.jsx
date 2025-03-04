import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from './componentes/Pie/Pie'
import Home from './paginas/Home/Home'
import Detalle from './paginas/Detalle/Detalle'

function App() {

  return (
      <div>

        <Cabecera></Cabecera>

        <Routes>

          <Route path="/" 

            element={<Home></Home>}>

          </Route>

          <Route path="/comida" 

            element={<Detalle></Detalle>}>

          </Route>

        </Routes>

        <Pie></Pie>

      </div>
  )
}

export default App
