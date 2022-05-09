import React from 'react'

const ModalDeleteExpend = (props) => {
    return (
        <>
            {/* modal delete expend */}
            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id={props.idmodal} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.textPrincipal}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button 
                                id={props.idbtnAceptar}
                                type="button"
                                className="btn btn-primary"
                                onClick={() => props.funcion()}
                            >Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDeleteExpend