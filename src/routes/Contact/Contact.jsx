import React from 'react'
import './contact.css'
import Form from '../../components/Form/Form'

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
        <Form/>
      </div>
    </section>

    </>
  );
}

export default Contact;