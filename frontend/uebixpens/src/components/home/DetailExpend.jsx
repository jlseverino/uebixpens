import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const DetailExpend = (props) => {

    const [fecha, setFecha] = useState();

    useEffect(() => {
        let fechaSinFormat = props.fecha;
        let anio = fechaSinFormat.substring(0, 4);
        let mes = fechaSinFormat.substring(5, 7);
        let dia = fechaSinFormat.substring(8, 10);
        let fechaFormat = dia + "-"+mes+"-"+anio;
        setFecha(fechaFormat);
    }, [props.fecha])

    return (
        <>
            <div className='rowExpendCategories'>
                <div className='rowExpendCategory'>
                    <div className='rowExpendCategoryDescription'>
                        <div>
                            <i className="fas fa-utensils" aria-hidden="true"></i>
                            <div className='descript_Expend'>
                                <span>{props.subcategoria}</span>
                                <span className='dateExpend'>{fecha}</span>
                            </div>
                        </div>
                    </div>
                    <div className='rowExpendCategoryAmount'>
                        <span>{props.valor}</span>
                        <span className='simbolMoneda'>S/</span>
                        <Link to={"/editExpend/" + props.id} className="btn_detail_ccategory">
                            <span>Editar</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailExpend