import React from 'react'

function Buscador() {
  return (
  <form>
    <div class="input-field">
      <input id="search" placeholder="Buscar productos..." type="search" required />
      <label class="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
      <i class="material-icons">close</i>
    </div>
  </form>
  )
}

export default Buscador