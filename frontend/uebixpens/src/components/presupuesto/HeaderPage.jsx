import React from 'react'
import {NavLink} from 'react-router-dom'

const HeaderPage = (props) => {

    return (
        <div className="headerview">
            <div className="title_sec_subview">
                <NavLink to={props.linkBtnIzq}>
                    <span><i className={props.classIcon}>{props.textBtnIzq}</i></span>
                </NavLink>
            </div>
            <div className="title_pri_subview">
                <span onClick={props.funcion}>{props.title}</span>
            </div>
            <div className="title_sec_subview">
                <NavLink to={props.linkBtnDer}>
                    <span>{props.textBtnDer}</span>
                </NavLink>
            </div>
        </div>
    )
}

export default HeaderPage