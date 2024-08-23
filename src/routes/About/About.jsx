import React from 'react'
import './about.css'

function About() {
    return (
        <>
        <section className="class-top">
            <div className='left-content'>
                <h1>Bem-vindo à revolução dos vídeos!</h1>
                <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                <button className='button'>Baixe o App!</button>
            </div>

            <div className='right-content'>
                <img src="..\src\assets\img\mobile-screen-step1.png" alt="mobile screen 1" className='mobile-screen'/>
                <img src="..\src\assets\img\mobile-screen-step2.png" alt="mobile screen 2" className='mobile-screen'/>
            </div>
        </section>

        <section>
            <div className='block-services'>
                <div className='services-content'>
                    <h2>Individual</h2>
                    <p>teste</p>
                    <select>
                        <option value="">Padrão </option>
                        <option value="teste1">teste1</option>
                        <option value="teste2">teste2</option>
                        <option value="teste3">teste3</option>
                    </select>
                    <button>Cadastrar</button>
                </div>

                <div className='services-content'>
                    <h2>Profissional - Times</h2>
                    <p>teste</p>
                    <select>
                        <option value="">Padrão </option>
                        <option value="teste1">teste1</option>
                        <option value="teste2">teste2</option>
                        <option value="teste3">teste3</option>
                    </select>
                    <button>Cadastrar</button>
                </div>

                <div className='services-content'>
                    <h2>Corporativo</h2>
                    <img src="..\src\assets\img\undraw_img.png" alt="undraw image" />
                    <button>Entre em contato</button>
                </div>
            </div> 
        </section>
        </>
    )
    
}

export default About;