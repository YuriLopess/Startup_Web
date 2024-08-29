import React, { useState } from 'react';
import './form.css'
import emailjs from '@emailjs/browser'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os dados")
            return;
        }
        
        const templateParams = {
            from_name: name, 
            message: message,
            email: email
        }
        
        emailjs.send("service_nfcqlwj", "template_xm56czo", templateParams, "1zoj7bCaeRVJPSzCs").then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log("Error", error)
        })
    }

    return (
        <>
        <form className='form-content' onSubmit={sendEmail}>
          <div className='form-group'>
            <label>Nome:</label>
            <input 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
            />
          </div>
          
          <div className='form-group'>
            <label>Email:</label>
            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            />
          </div>

          <div className='form-group'>
            <label>Mensagem:</label>
            <textarea 
              id='form-message' 
              onChange={(e) => setMessage(e.target.value)} 
              value={message} 
              rows="4"
            />
          </div>

          <div className='form-button'>
            <button className='button' type='submit'>Enviar</button>
          </div>
          
        </form>
        </>
    )
}

export default Form;