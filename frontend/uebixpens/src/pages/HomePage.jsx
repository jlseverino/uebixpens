import React from 'react'
import DateandAdd from '../components/home/DateandAdd'
import ListExpendCategory from '../components/home/ListExpendCategory'
import ModalDeleteExpend from '../components/home/ModalDeleteExpend'

const HomePage = () => {
  return (

    <div>
      <ModalDeleteExpend
        title={"Eliminar Gasto"}
        textPrincipal={"¿Seguro que deseas eliminar el gasto?"}
        idbtnAceptar={"deleteExpend"}
        idmodal={"modalDeleteExpend"}
      />
      <DateandAdd />
      <ListExpendCategory />
    </div>
    // </>
    
  )
}

export default HomePage