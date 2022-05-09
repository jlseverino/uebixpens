import React from "react";
import { NavLink } from 'react-router-dom'


const HeaderViews = () => {
  return (
    <div className="headerview">
      <div className="title_sec_subview">
        <NavLink to={"/"}>
          <span>Cancelar</span>
        </NavLink>
      </div>
      <div className="title_pri_subview">
        <span>Gastos</span>
      </div>
      <div className="title_sec_subview">
        <NavLink to={"/editCategory"}>
          <span>Editar</span>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderViews;
