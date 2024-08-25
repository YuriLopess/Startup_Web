import React from 'react';
import './contact.css'

function Contact() {
  return (
    <>
    <section className='class-top'>
      <div className='left-content'>
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div id='icons-content'>
          <p><i class="fa-brands fa-youtube"></i></p>
          <p><i class="fa-brands fa-instagram"></i></p>
          <p><i class="fa-brands fa-facebook"></i></p>
        </div>
      </div>

      <div className='center-content'></div>

      <div className='right-content'>
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
      </div>
    </section>

    </>
  );
}

export default Contact;