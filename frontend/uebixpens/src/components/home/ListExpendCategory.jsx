import React, {useEffect, useState} from 'react';

const ListExpendCategory = () => {

    const [expendMonth, setExpendMonth] = useState([]);

    useEffect(() => {
        
        let url = 'http://localhost:4000/api/gastos/';

        const getData = async (url) => {
            let res = await fetch(url, 
                {method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            let data = await res.json();
            setExpendMonth(data);
        }

        getData(url);

    },[]);

    
    console.log(expendMonth);

    

  return (
    <div className='sectionHome'>
        <div className='headerSectionHome'>
            <h4>GASTOS MENSUALES</h4>
            <div>
                <span id='expendMonth'></span>
                <span className='simbolMoneda'>S/</span>
            </div>
        </div>
        <div className='bodySectionHome'>
            <div className='rowExpendCategories'>
                <div className='rowExpendCategory'>
                    <div className='rowExpendCategoryDescription'>
                        <i className="fas fa-utensils" aria-hidden="true"></i>
                        <span>Comida</span>
                    </div>
                    <div className='rowExpendCategoryAmount'>
                        <span>320.00</span>
                        <span className='simbolMoneda'>S/</span>
                    </div>
                </div>
                <div className='rowExpendDetail d-none'>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
           
            <ul>
                {
                    expendMonth.map( gasto =>
                        <li key={gasto.valor} >{gasto.valor}</li>
                    )
                }
            </ul>

            
        </div>

    </div>
  )
}

export default ListExpendCategory