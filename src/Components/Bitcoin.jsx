import React, {useState} from "react";


const Bitcoin = () => {

    const [bitcoin , setBitcoin] = useState(0)
  return (
    <div>
        <h3>Cantidad de Bitcoins Actuales {bitcoin}</h3>
        <button onClick={() => setBitcoin(bitcoin + 1)}>
            Aumentar  
        </button>
        <button onClick={() => setBitcoin(bitcoin -1)}>
            Disminuir  
        </button>
</div>
  )
}

export default Bitcoin