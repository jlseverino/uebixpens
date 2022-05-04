import React from 'react';
import { NavLink } from 'react-router-dom'

const CabeceraSaldo = () => {
    return (
        <>
            <div className='container_header_saldo'>
                <NavLink to="/">
                    <i className="fas fa-angle-left"></i>
                </NavLink>
                <div className='title_pri_subview'>
                    <span>Saldo</span>
                </div>
                <div className='item_add_ingreso'>
                    <span>Agregar</span>
                </div>
            </div>
        </>

    )
}

export default CabeceraSaldo