import React from 'react';
import { NavLink } from 'react-router-dom'

var date_now = new Date();
let day = date_now.getDate();
let month = date_now.getMonth() + 1;
let year = date_now.getFullYear();

var getNameMonth = (month) => {
    let nameMonth;
    switch (month) {
        case 1:
            nameMonth = "Enero";
            break;
        case 2:
            nameMonth = "Febrero";
            break;
        case 3:
            nameMonth = "Marzo";
            break;
        case 4:
            nameMonth = "Abril";
            break;
        case 5:
            nameMonth = "Mayo";
            break;
        case 6:
            nameMonth = "Junio";
            break;
        case 7:
            nameMonth = "Julio";
            break;
        case 8:
            nameMonth = "Agosto";
            break;
        case 9:
            nameMonth = "Setiembre";
            break;
        case 10:
            nameMonth = "Octubre";
            break;
        case 11:
            nameMonth = "Noviembre";
            break;
        case 12:
            nameMonth = "Diciembre";
            break;
    }
    return nameMonth;
};

var nameMonthString = getNameMonth(month);

const DateandAdd = () => {
    return (
        <div className='content_home border_botton'>
            <div className='big_date_and_add'>
                <div className='big_date'>
                    <span>{day}</span>
                    <div>
                        <span>Lunes</span>
                        <span>{nameMonthString + " " + year}</span>
                    </div>
                </div>
                <NavLink to={"/selecCateg"}>
                    <div className='and_add'>
                        <i className="fas fa-plus bverde"></i>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DateandAdd