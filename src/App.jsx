import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Home from './paginas/Home/Home'
import Detalle from './paginas/Detalle/Detalle'
import { Suspense } from 'react'
import LazyLoad from 'react-lazy-load'
import React from 'react'

const Pie = React.lazy(() => import('./componentes/Pie/Pie'));

function App() {

  return (
      <div>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/comida/:id" element={<Detalle />} />

        </Routes>

        <Suspense fallback={"Cargando pie de página"}>

          <LazyLoad offset={250}>

            <Pie />

          </LazyLoad>

        </Suspense>
      </div>
  )
}

export default App