import React from "react";
import { useCartContext } from "../../context/CartContext";

const Form = ({ cambio, envio }) => {
  const { formData } = useCartContext();
 

  return ( 
    <form  className='formulario' onChange={cambio} onSubmit={envio}>
    <h4>Tus Datos</h4>

      <div className='input-field'>
        <input
          id='first_name'
          type='text'
          name='nombre'
          className='validate'
          required
          defaultValue={formData.nombre}
        />
        <label htmlFor='first_name' data-error='wrong' data-success='right'>
          Nombre
        </label>
      </div>

      <div className='row'>
        <div className='input-field col s12'>
          <input
            id='phone'
            type='tel'
            required
            name='telefono'
            className='validate'
            defaultValue={formData.telefono}
          />
          <label htmlFor='phone' data-error='wrong' data-success='right'>
            Telefono
          </label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field col s12'>
          <input
            id='email'
            type='email'
            required
            name='email'
            className='validate'
            defaultValue={formData.email}
          />
          <label htmlFor='email' data-error='wrong' data-success='right'>
            Email
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input
            id='emailRepetir'
            type='email'
            required
            className='validate'
            name='email_validate'
          />

          <label htmlFor='emailRepetir' data-error='wrong' data-success='right'>
            Confirmar Email
          </label>
        </div>
      </div> 


      <button  className='btn waves-effect waves-light' disabled={
        formData.nombre === "" || formData.telefono === "" || formData.email!==formData.email_validate ? true : false
    }>
        Confirmar <i className='material-icons right'>send</i>
      </button>
    </form>

  );
};

export default Form;
