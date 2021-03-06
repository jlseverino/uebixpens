import React, { useEffect, useState } from 'react';
import DetailExpend from './DetailExpend';
import ExpendByCategoryMonth from './ExpendByCategoryMonth';
import { useAuth0 } from '@auth0/auth0-react';
import { Constantes } from '../../Constantes'

const ListExpendCategory = () => {

    const { user, isAuthenticated } = useAuth0();

    const [expendMonth, setExpendMonth] = useState([]);
    const [expendbyCategory, setExpendbyCategory] = useState([]);
    const [amountTotalMonth, setAmountTotalMonth] = useState(0);
    const [selectCategory, setSelectCategory] = useState("asd");
    const [listSubcategory, setListSubcategory] = useState([]);


    useEffect(() => {

        let url = Constantes.api_gastos + user.email;

        const getTotalExpend = (data) => {
            let dateNow = new Date();
            var firstDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
            var lastDay = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);
            let valorTotal = 0;
            data.map(gasto => {
                var dateGasto = new Date(gasto.fecha);
                if (dateGasto > firstDay && dateGasto < lastDay) {
                    valorTotal = valorTotal + gasto.valor;
                }
            })
            setAmountTotalMonth(valorTotal.toFixed(2));

        }

        const getData = async (url) => {
            let res = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            let data = await res.json();
            setExpendMonth(data);
            getTotalExpend(data);
        }

        getData(url);

    }, []);

    function addDaysToDate(date, days) {
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }

    const getLastDay = () => {
        let now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        date = addDaysToDate(date, 1);
        var res = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        return res;
    }

    const getfirstDay = () => {
        let now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), 1);
        var res = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + date.getDate();
        return res;
    }

    useEffect(() => {
        let url_bycategory = Constantes.api_gastos + 'bycategory/' + user.email;

        const getDatabyCategory = async (url_bycategory) => {
            var lastday = await getLastDay();
            var firstDay = await getfirstDay();

            var data = {
                lastday,
                firstDay
            };

            let resbycategory = await fetch(url_bycategory,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

            let databycategory = await resbycategory.json();

            setExpendbyCategory(databycategory);

        };

        getDatabyCategory(url_bycategory);
    }, []);


    const getSubcategory = (category) => {
        console.log(category);
        setSelectCategory(category);
    }

    useEffect(() => {
        console.log("desde el useEffect ", selectCategory);
        let url_bysubcategory = Constantes.api_gastos + 'bysubcategory/' + user.email;

        const getDatabySubcategory = async (url_bysubcategory) => {

            var lastday = await getLastDay();
            var firstDay = await getfirstDay();

            var data = {
                lastday,
                firstDay,
                selectCategory
            };

            let resbysubcategory = await fetch(url_bysubcategory,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

            let databysubcategory = await resbysubcategory.json();
            
            setListSubcategory(databysubcategory);

            console.log(databysubcategory);

            

            console.log(listSubcategory);
        }

        getDatabySubcategory(url_bysubcategory);

    }, [selectCategory]);

    
    //EDITAR SUBCATEGORIA
    const editSubcategoria = async (id) => {
        let url_getById = Constantes.api_gastos + id + "/" + user.email;

        console.log(url_getById);

        var res = await fetch(url_getById,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        
        let resDataJson = await res.json();

    }

    return (
        <>
            <div className='sectionHome'>
                <div className='headerSectionHome'>
                    <h4>GASTOS MENSUALES</h4>
                    <div>
                        <span id='expendMonth'>{amountTotalMonth}</span>
                        <span className='simbolMoneda'>S/</span>
                    </div>
                </div>
                <div className='bodySectionHome'>
                    {
                        expendbyCategory.map(expendCategory =>
                            <ExpendByCategoryMonth key={expendCategory._id} _id={expendCategory._id} subtotales={expendCategory.subtotales.toFixed(2)} funcion={getSubcategory} />
                        )
                    }
                </div>

            </div>
            <div className='sectionHome'>
                <div className='headerSectionHome'>
                    <h4>DETALLE DEL GASTO</h4>
                </div>
                <div className='bodySectionHome'>
                    {listSubcategory.length == 0
                        ? <p>Sin subcategorias por mostrar</p>
                        : listSubcategory.map(subcategory =>
                            <DetailExpend key={subcategory._id} subcategoria={subcategory.subcategoria} valor={subcategory.valor.toFixed(2)} funcion={editSubcategoria} id={subcategory._id} fecha={subcategory.fecha} />
                        )
                    }
                </div>
            </div>
        </>

    )
}

export default ListExpendCategory