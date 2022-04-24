import React from "react";
import { NavLink } from 'react-router-dom';


const UnitCategory = (props) => {
    return (
        <>
            <NavLink to={"/agregarGasto"} className="content_unit_catgory" >
                <div id={props.id} className="content_unit_catgory">
                    <i className="fas fa-utensils"></i>
                    <p>{props.description}</p>
                </div>
            </NavLink>
        </>
    );
};

export default UnitCategory;
