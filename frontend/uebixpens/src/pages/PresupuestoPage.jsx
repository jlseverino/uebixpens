import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import HeaderPage from '../components/presupuesto/HeaderPage'

const PresupuestoPage = () => {

  const [add, getAdd] = useState("disable");

  const getAddPresupuesto = () => {
    getAdd("agregar");
  }
  const getViewPresupuesto = () => {
    getAdd("disable");
  }

  // obtener categorias
  

  if (add == "disable") {
    return (
      <>
        <div className="headerview">
          <div className="title_sec_subview">
            <NavLink to={"/"}>
              <span><i className="fas fa-angle-left"></i></span>
            </NavLink>
          </div>
          <div className="title_pri_subview">
            <span>Presupuesto</span>
          </div>
          <div className="title_sec_subview">
            <span onClick={getAddPresupuesto}>Agregar</span>
          </div>
        </div>
        <h1>Lista de presupuestos</h1>
      </>
    )
  } else {
    return (
      <>
        <div className="headerview">
          <div className="title_sec_subview">
            <span onClick={getViewPresupuesto}><i className="fas fa-angle-left"></i></span>
          </div>
          <div className="title_pri_subview">
            <span>Presupuesto</span>
          </div>
          <div className="title_sec_subview">
            <span onClick={getAddPresupuesto}>Guardar</span>
          </div>
        </div>
        <div>
          <form action="">
            <input type="text" />
          </form>
        </div>
      </>
    )
  }


}

export default PresupuestoPage