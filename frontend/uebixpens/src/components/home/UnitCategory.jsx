import React from "react";
import { NavLink } from 'react-router-dom';


const UnitCategory = (props) => {
    return (
        <>
            <div onClick={() => props.funcion(props.description, props.icon)} id={props.id} className="content_unit_catgory">
                <i className={props.icon}></i>
                <p>{props.description}</p>
            </div>
        </>
    );
};

export default UnitCategory;
