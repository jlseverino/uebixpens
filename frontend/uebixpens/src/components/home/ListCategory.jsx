import React from 'react'
import UnitCategory from './UnitCategory'

var categpories = [
    {
        id:"1",
        description: "Transporte",
        icon: "",
    },
    {
        id:"2",
        description: "Vestimenta",
        icon: "",
    },
    {
        id:"3",
        description: "Alimentos",
        icon: "",
    },
    {
        id:"4",
        description: "Restaurante",
        icon: "",
    },
    {
        id:"5",
        description: "Fiestas",
        icon: "",
    },
    {
        id:"6",
        description: "Servicios",
        icon: "",
    },
    {
        id:"7",
        description: "Tecnología",
        icon: "",
    },
    {
        id:"8",
        description: "Mascota",
        icon: "",
    },
    {
        id:"9",
        description: "Abarrotes",
        icon: "",
    }
]

const ListCategory = () => {
  return (
    <div className='cont_list_category'>
        {
            categpories.map(category => 
                <UnitCategory key={category.description} id={category.id} description={category.description}  />
            )
        }
    </div>
  )
}

export default ListCategory