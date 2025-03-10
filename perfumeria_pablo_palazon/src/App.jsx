import './App.css'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import { Route, Routes } from 'react-router-dom'

import Home from './paginas/Home/Home'
import Detalle from './paginas/Detalle/Detalle'
import Cabecera from './componentes/Cabecera/Cabecera'
import ScrollUpDown from './componentes/ScrollUpDown/ScrollUpDown'

const Pie = React.lazy(() => import('./componentes/Pie/Pie'))

import { Suspense } from 'react'

function App() {
 

  return (
    <div>
            <Cabecera></Cabecera>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/perfume/:id" element={<Detalle />} />

      </Routes>


      <Suspense fallback={"Cargando pie de página"}>
      
              {/* En el componente Pie, estamos usando React.lazy para cargarlo de forma dinámica */}
                <LazyLoad offset={250}>
      
              {/* En el componente LazyLoad, estamos usando el offset para cargar 
                el componente Pie cuando esté a 250px de la vista del usuario */}
                
                  <Pie />
      
                </LazyLoad>
      
      </Suspense>
      <ScrollUpDown></ScrollUpDown>

    </div>
  )
}

export default App
