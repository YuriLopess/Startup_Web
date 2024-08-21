import React from 'react';
import './contact.css'

function Contact() {
  return (
    <>
    <section className='class-top'>
      <div className='left-content'>
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>

      <div className='right-content'>
        <form className='form-content'>
          <label>Nome:</label>
          <input type="text"/>

          <label>Email:</label>
          <input type="text"/>

          <label>Mensagem:</label>
          <input type="text"/>

          <button className='button'>Enviar</button>
        </form>        
      </div>
    </section>

    </>
  );
}

export default Contact;