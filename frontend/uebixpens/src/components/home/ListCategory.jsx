import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import UnitCategory from './UnitCategory'

// var categpories = [
//     {
//         id: "1",
//         description: "Transporte",
//         icon: "",
//     },
//     {
//         id: "2",
//         description: "Vestimenta",
//         icon: "",
//     },
//     {
//         id: "3",
//         description: "Alimentos",
//         icon: "",
//     },
//     {
//         id: "4",
//         description: "Restaurante",
//         icon: "",
//     },
//     {
//         id: "5",
//         description: "Fiestas",
//         icon: "",
//     },
//     {
//         id: "6",
//         description: "Servicios",
//         icon: "",
//     },
//     {
//         id: "7",
//         description: "Tecnología",
//         icon: "",
//     },
//     {
//         id: "8",
//         description: "Mascota",
//         icon: "",
//     },
//     {
//         id: "9",
//         description: "Abarrotes",
//         icon: "",
//     }
// ]

let rowExpemd = {
    categoria: "sincategoria",
    valor: 0
}

const ListCategory = () => {

    const [categoryexp, setcategory] = useState(rowExpemd)
    const [iconexp, seticon] = useState("")
    const [categories2, setCateghories] = useState([]);

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

        setcategory(Object.assign(categoryexp, { valor: amount }, { hora: hora }, { fecha: hoy }, { id: id }, { subcategoria: subcategory }));
        console.log(categoryexp);

        // var url = 'http://localhost:4000/api/gastos/';
        var url = 'https://apiuebify.herokuapp.com/api/gastos/';
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
            .then(response => console.log('Success:', response));
    }

    // useEffect(() => {
    //     const url = "https://apiuebify.herokuapp.com/api/categorias/";

    //     const getCategoriesApi = async (url) => {
    //         var res = await fetch(url,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //             });

    //         let data = await res.json();

    //         setCateghories(data);
    //     }

    //     getCategoriesApi(url);

    // }, []);

    useEffect(() => {
        const url = "https://apiuebify.herokuapp.com/api/categorias/";

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
                    categories2.map(category =>
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
                        <button className='btn_change_category' onClick={resetCategory}>Cambiar jorge</button>
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