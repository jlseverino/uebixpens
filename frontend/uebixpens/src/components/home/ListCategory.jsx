import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UnitCategory from './UnitCategory';
import { Constantes } from '../../Constantes.jsx'

let rowExpemd = {
    categoria: "sincategoria",
    valor: 0
}

const ListCategory = () => {

    const { user, isAuthenticated } = useAuth0();

    const [categoryexp, setcategory] = useState(rowExpemd)
    const [iconexp, seticon] = useState("")
    const [categories, setCateghories] = useState([]);

    const selectCategory = (categorySelected, iconSelected) => {
        setcategory({ ...{ categoria: categorySelected, valor: 0 } });
        seticon(iconSelected);
    }
    
    const resetCategory = () => {
        setcategory({ categoria: "sincategoria" });
    }

    const saveExpend = () => {
        let amount = document.getElementById('inputFormExpend').value * 1;
        let hoy = new Date();
        let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
        let id = fecha + hora;
        let subcategory = document.getElementById('inputFormSubcategory').value;

        setcategory(Object.assign(categoryexp, { valor: amount }, { hora: hora }, { fecha: hoy }, { id: id }, { subcategoria: subcategory }, {usuario: user.email} ));
        console.log(categoryexp);

        var url = Constantes.api_gastos;
        var data = JSON.stringify(categoryexp);
        console.log(data);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                window.location.href = "./";
            })
    }

    useEffect(() => {
        const url = Constantes.api_categorias + user.email;

        const getCategoriesApi = async (url) => {
            var res = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

            let data = await res.json();

            setCateghories(data);
        }

        getCategoriesApi(url);

    }, [])

    if (categoryexp.categoria == "sincategoria") {
        return (
            <div className='cont_list_category'>
                {
                    categories.map(category =>
                        <UnitCategory key={category.categoria} id={category._id} description={category.categoria} icon={category.icon} funcion={selectCategory} />
                    )
                }
            </div>
        )
    } else {
        return (
            <>
                <div className='rowFormExpend'>
                    <div>
                        <div>
                            <i className={iconexp}></i>
                            <span>{categoryexp.categoria}</span>
                        </div>
                        <button className='btn_change_category' onClick={resetCategory}>Cambiar</button>
                    </div>
                </div>
                <div className='rowFormExpend'>
                    <input id='inputFormExpend' className='inputFormExpend' type="number" placeholder='0' />
                </div>
                <div className='rowFormExpend'>
                    <input id='inputFormSubcategory' className='inputFormSubcategory' type="text" placeholder='Subcategoria' />
                </div>
                <div className='rowFormSave'>
                    <i onClick={saveExpend} className="fas fa-save"></i>
                </div>
            </>
        )
    }
}
export default ListCategory