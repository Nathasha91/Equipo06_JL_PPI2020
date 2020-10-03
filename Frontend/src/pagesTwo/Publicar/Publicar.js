import React from 'react'


const Publicar = () => {
    return (
        <div>

<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Descripción</textarea>

<select class="form-control form-control-sm">
  <option>Grupo/s
      <option>11*1</option>
       <option>11*2</option>
      <option>11*3</option>
      <option>11*4</option>
      <option>11*5</option>
  </option>
</select>

<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">DD/MM/AA</input>

<button type="button" class="btn btn-blue text-light"> Publicar.</button>

        </div>
          )
        }
        export default Publicar