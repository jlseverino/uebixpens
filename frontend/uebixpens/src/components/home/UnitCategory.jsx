import React from "react";
import { NavLink } from 'react-router-dom';


const UnitCategory = (props) => {
    return (
        <>
            <div onClick={() => props.funcion(props.description)} id={props.id} className="content_unit_catgory">
                <i className="fas fa-utensils"></i>
                <p>{props.description}</p>
            </div>
        </>
    );
};

export default UnitCategory;
