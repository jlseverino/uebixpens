import React, { useEffect, useState } from 'react';

const BodySaldo = (props) => {

    const getRestante = () => {
        let restante = props.ingreso - props.gastoTotal;
        return restante
    }

    let resto = getRestante()

    return (
        <>
            <div>
                <div className='row_ingreso'>
                    <h5>Ingreso</h5>
                    <div>S/ <span>{props.ingreso}</span></div>
                </div>
                <div className='row_ingreso style_gasto'>
                    <h5>Gasto</h5>
                    <div>S/ <span>{props.gastoTotal}</span></div>
                </div>
                <div className='row_ingreso style_restante'>
                    <h5>Restante</h5>
                    <div>S/ <span>{resto}</span></div>
                </div>
            </div>
        </>
    )
}

export default BodySaldo