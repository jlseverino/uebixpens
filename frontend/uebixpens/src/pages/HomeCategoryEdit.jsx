import React, { useEffect, useState } from 'react'
import HeaderViews from '../components/home/HeaderViews';
import UnitCategory from '../components/home/UnitCategory';
import { useAuth0 } from '@auth0/auth0-react';
import { Constantes } from '../Constantes';

const HomeCategoryEdit = () => {

    const { user, isAuthenticated } = useAuth0();

    const [categories, setCateghories] = useState([]);

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

    console.log(categories);

    const editCategory = (id) => {
        console.log(id)
    }

    return (
        <>
            <HeaderViews />
            <div className='cont_list_category'>
                {
                    categories.map(category =>
                        <UnitCategory key={category.categoria} id={category._id} description={category.categoria} subcategoria={category.subcategoria} icon={category.icon} funcion={editCategory} />
                    )
                }
            </div>
        </>
    )
}

export default HomeCategoryEdit