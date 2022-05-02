import React from 'react'

const DetailExpend = (props) => {
    return (
        <>
            <div className='rowExpendCategories'>
                <div className='rowExpendCategory'>
                    <div className='rowExpendCategoryDescription'>
                        <i className="fas fa-utensils" aria-hidden="true"></i>
                        <span>{props._id}</span>
                    </div>
                    <div className='rowExpendCategoryAmount'>
                        <span>{props.subtotales}</span>
                        <span className='simbolMoneda'>S/</span>
                        <div className='btn_detail_ccategory d-none'>
                            <span>Detalle</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailExpend