import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import { Constantes } from '../../Constantes';

const DetailExpend = (props) => {

    const [fecha, setFecha] = useState();

    useEffect(() => {
        let fechaSinFormat = props.fecha;
        let anio = fechaSinFormat.substring(0, 4);
        let mes = fechaSinFormat.substring(5, 7);
        let dia = fechaSinFormat.substring(8, 10);
        let fechaFormat = dia + "-" + mes + "-" + anio;
        setFecha(fechaFormat);
    }, [props.fecha])

    const openModalDelete = (idExpend, idModal, idaceptar) => {
        let modal = new Modal(document.getElementById(idModal), {});
        modal.show();

        let aceptar = document.getElementById(idaceptar);
        aceptar.onclick = () => {
            deleteExpend(idExpend, modal);
        }
    }

    const deleteExpend = async (id, modal) => {
        const url_del = Constantes.api_gastos + id;

        var res = await fetch(url_del,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        let data = await res.json();
        modal.hide();
    }

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
                            <i className="fas fa-edit"></i>
                        </Link>
                        <span onClick={() => openModalDelete(props.id, "modalDeleteExpend", "deleteExpend")} className='trash_expend_detail'><i className="fas fa-trash"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailExpend