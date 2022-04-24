import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className=''>
                <NavLink to="/">
                    <li className='active'>
                        <i className="fas fa-calendar-check"></i>
                        <span>Hoy</span>
                    </li>
                </NavLink>
                <NavLink to="/saldo">
                    <li>
                        <i className="fas fa-balance-scale-left"></i>
                        <span>Saldo</span>
                    </li>
                </NavLink>
                <NavLink to="/presupuesto">
                    <li>
                        <i className="fas fa-wallet"></i>
                        <span>Presupuesto</span>
                    </li>
                </NavLink>

                <NavLink to="/informes">
                    <li>
                        <i className="fas fa-chart-bar"></i>
                        <span>Informes</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar