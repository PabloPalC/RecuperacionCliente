import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Home from './paginas/Home/Home'
import Detalle from './paginas/Detalle/Detalle'
import { Suspense } from 'react'
import LazyLoad from 'react-lazy-load'
import React from 'react'
import ScrollUpDown from './componentes/ScrollUpDown/ScrollUpDown'

const Pie = React.lazy(() => import('./componentes/Pie/Pie'));

function App() {

  return (
      <div>
        <Cabecera />

        <Routes>

          {/* En la ruta de abajo, estamos pasando el componente Home a la página de inicio */}
          
          <Route path="/" element={<Home />} />

          {/* En la ruta de abajo, estamos pasando el id de la receta a la página de detalle */}

          <Route path="/comida/:id" element={<Detalle />} />


        </Routes>

        <Suspense fallback={"Cargando pie de página"}>

        {/* En el componente Pie, estamos usando React.lazy para cargarlo de forma dinámica */}
          <LazyLoad offset={250}>

        {/* En el componente LazyLoad, estamos usando el offset para cargar 
          el componente Pie cuando esté a 250px de la vista del usuario */}
          
            <Pie />

          </LazyLoad>

        </Suspense>

        <ScrollUpDown />
      </div>
  )
}

export default App