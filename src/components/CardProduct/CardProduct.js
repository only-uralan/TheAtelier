import React from "react";
import { useParams } from 'react-router-dom'

const CardProduct = (  ) => {
  
  const { name } = useParams()

  return (
    <div>
      Описание товара {name}
    </div>
  )
}

export default CardProduct;