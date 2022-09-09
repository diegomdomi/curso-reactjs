import React from 'react'

const Preloader = () => {
  return (
     <> <h4>Cargando productos</h4>
    
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Preloader