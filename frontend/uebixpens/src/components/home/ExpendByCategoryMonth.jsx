import React from 'react'

const ExpendByCategoryMonth = (props) => {
    return (
        <div className='rowExpendCategories'>
            <div className='rowExpendCategory'>
                <div className='rowExpendCategoryDescription'>
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                    <span>{props._id}</span>
                </div>
                <div className='rowExpendCategoryAmount'>
                    <span>{props.subtotales}</span>
                    <span className='simbolMoneda'>S/</span>
                </div>
            </div>
            <div className='rowExpendDetail d-none'>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default ExpendByCategoryMonth