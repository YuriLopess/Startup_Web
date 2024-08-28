import React, { useState } from 'react';
import './form.css'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return(
        <>
        <form className='form-content'>
          <div className='form-group'>
            <label>Nome:</label>
            <input type="text"/>
          </div>
          
          <div className='form-group'>
            <label>Email:</label>
            <input type="text"/>
          </div>

          <div className='form-group'>
            <label>Mensagem:</label>
            <input type="text" id='form-message'/>
          </div>

          <div className='form-button'>
            <button className='button'>Enviar</button>
          </div>
          
        </form>
        </>
    )
}

export default Form