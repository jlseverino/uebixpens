import React, { useEffect, useState } from 'react'
import HeaderViews from '../components/home/HeaderViews';
import UnitCategory from '../components/home/UnitCategory';

const HomeCategoryEdit = () => {

    const [categories, setCateghories] = useState([]);

    useEffect(() => {
        // const url = "http://localhost:4000/api/categorias/";
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
        // getCategoriesApi(url_bysubcategory);

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