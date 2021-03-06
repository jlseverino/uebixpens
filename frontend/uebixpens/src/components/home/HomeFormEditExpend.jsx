import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Constantes } from '../../Constantes'

const HomeFormEditExpend = (props) => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user);

    const [datos, setDatos] = useState({
        id: '',
        categoria: ''
    })
    const [idsubcategory, setIdsubcategory] = useState("");
    const [expends, setExpends] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIdsubcategory(props.id);
    }, []);

    useEffect(() => {

        let url_getById = Constantes.api_gastos + props.id + "/" + user.email;

        const getSubcategoria = async (id) => {
            var res = await fetch(url_getById,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

            let resDataJson = await res.json();

            setExpends(resDataJson);

        }

        getSubcategoria(url_getById);

    }, []);

    const datosEdit = (event) => {
        event.preventDefault()
        let myForm = document.getElementById('datosEditform');
        let formData = new FormData(myForm);
        let data = {
            id: idsubcategory,
            categoria: formData.get('categoria'),
            subcategoria: formData.get('subcategoria'),
            fecha: formData.get('fecha'),
            hora: formData.get('hora'),
            valor: formData.get('valor'),
            usuario: user.email,
        }

        let url_getById = Constantes.api_gastos + idsubcategory;

        const getUpdateExpend = async (id) => {
            var res = await fetch(url_getById,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    ody: JSON.stringify(data)
                });

            let resDataJson = await res.json();

            if (resDataJson.status == "Gasto actualizado!") {
                let menssage_success = document.getElementById('menssage_success');
                menssage_success.textContent = resDataJson.status;
                menssage_success.classList.remove('d-none');
                setTimeout(() => {
                    menssage_success.classList.add('d-none');
                }, 1500);

            } else {
                let menssage_success = document.getElementById('menssage_success');
                menssage_success.textContent = "Error";
                menssage_success.classList.remove('d-none');
                setTimeout(() => {
                    menssage_success.classList.add('d-none');
                }, 1500);
            }

            console.log(resDataJson);

        }
        getUpdateExpend(url_getById);
    };

    return (
        <>
           
            <div className='container_form'>
                <form onSubmit={datosEdit} id="datosEditform">
                    <div className='row_formEditExpend'>
                        <label htmlFor="id">ID</label>
                        <input
                            // id='id'
                            name="id"
                            defaultValue={expends._id}
                            disabled
                        />
                    </div>
                    <div className='row_formEditExpend'>
                        <label htmlFor="categoria">Cateoria</label>
                        <input
                            defaultValue={expends.categoria}
                            name="categoria"
                        />
                    </div>
                    <div className='row_formEditExpend'>
                        <label htmlFor="categoria">Subcategoria</label>
                        <input
                            defaultValue={expends.subcategoria}
                            name="subcategoria"
                        />
                    </div>
                    <div className='row_formEditExpend'>
                        <label htmlFor="categoria">Fecha</label>
                        <input
                            defaultValue={expends.fecha}
                            name="fecha"
                        />
                    </div>
                    <div className='row_formEditExpend'>
                        <label htmlFor="categoria">Hora</label>
                        <input
                            defaultValue={expends.hora}
                            name="hora"
                        />
                    </div>
                    <div className='row_formEditExpend'>
                        <label htmlFor="categoria">Valor</label>
                        <input
                            type="number"
                            step="any"
                            defaultValue={expends.valor}
                            name="valor"
                        />
                    </div>

                    <button className='btn_save_edit_expend' type='submit'>Guardar</button>
                    <div id='menssage_success' className='d-none'></div>
                </form>
            </div>
        </>
    )
}

export default HomeFormEditExpend