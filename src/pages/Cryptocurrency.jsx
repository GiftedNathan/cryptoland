import React from 'react'

import { useParams } from 'react-router-dom'

const Cryptocurrency = () => {

  const Id = useParams().cryptoID
  return (
    <div>Cryptocurrency  -- {Id}


      more detail about this shortly. still in development
    </div>
  )
}

export default Cryptocurrency