import React, {useEffect, useState} from 'react';
import ExpendByCategoryMonth from './ExpendByCategoryMonth';

const ListExpendCategory = () => {

    const [expendMonth, setExpendMonth] = useState([]);
    const [expendbyCategory, setExpendbyCategory] = useState([]);
    const [amountTotalMonth, setAmountTotalMonth] = useState(0);

    useEffect(() => {
        
        let url = 'http://localhost:4000/api/gastos/';

        const getTotalExpend = (data) => {
            let dateNow = new Date();
            var firstDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
            var lastDay = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);
            let valorTotal = 0;
            data.map(gasto => {
                var dateGasto = new Date(gasto.fecha);
                if(dateGasto > firstDay && dateGasto < lastDay) {
                    valorTotal = valorTotal + gasto.valor;
                }
            })
            setAmountTotalMonth(valorTotal);

        }

        const getData = async (url) => {
            let res = await fetch(url, 
                {method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            let data = await res.json();
            setExpendMonth(data);
            getTotalExpend(data);
        }

        getData(url);

    },[]);


    useEffect(() => {
        let url_bycategory = 'http://localhost:4000/api/gastos/bycategory';

        function addDaysToDate(date, days){
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
    },[]);
    
  return (
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
            expendbyCategory.map( expendCategory =>
                <ExpendByCategoryMonth key={expendCategory._id} _id={expendCategory._id} subtotales={expendCategory.subtotales} />
           )
        }

            
        </div>

    </div>
  )
}

export default ListExpendCategory