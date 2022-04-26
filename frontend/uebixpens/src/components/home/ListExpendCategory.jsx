import React, {useEffect, useState} from 'react';

const ListExpendCategory = () => {

    const [expendMonth, setexpendMonth] = useState(0.00);

    useEffect(() => {
        
    },[])

  return (
    <div className='sectionHome'>
        <div className='headerSectionHome'>
            <h4>GASTOS MENSUALES</h4>
            <div>
                <span id='expendMonth'>{expendMonth}</span>
                <span className='simbolMoneda'>S/</span>
            </div>
        </div>
        <div className='bodySectionHome'>
            <div className='rowExpendCategories'>
                <div className='rowExpendCategory'>
                    <div className='rowExpendCategoryDescription'>
                        <i class="fas fa-utensils" aria-hidden="true"></i>
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
        </div>

    </div>
  )
}

export default ListExpendCategory