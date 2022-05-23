import React, { useState, useEffect } from 'react';
// let url_bycategory = 'http://localhost:4000/api/gastos/bycategory';
// let url_bycategory = 'https://apiuebify.herokuapp.com/api/gastos/bycategory';

// const api_gastos = "http://localhost:4000/api/gastos/";
// const api_categorias = "http://localhost:4000/api/categorias/";

const useCategoryGastos = (url) => {

    const [data, getData] = useState(null);
    const [isPending, getIsPending] = useState(null);
    const [error, getError] = useState(false);

    useEffect(()=>{



        const getDatabyCategory = async (url) => {
            var lastday = await getLastDay();
            var firstDay = await getfirstDay();

            var dataPost = {
                lastday,
                firstDay
            };

            let resbycategory = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataPost)
                });

            let databycategory = await resbycategory.json();

            setExpendbyCategory(databycategory);

        };

        getDatabyCategory(url_bycategory);

    },[])



    return {data, isPending, error};
}

export default useCategoryGastos