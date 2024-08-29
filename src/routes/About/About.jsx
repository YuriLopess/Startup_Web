import React, { useState } from 'react';
import './about.css';

function About() {
    const [activeService, setActiveService] = useState(null);

    const handleClick = (service) => {
        setActiveService(service);
    };

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
                {['Individual', 'Profissional - Times', 'Corporativo'].map((service, index) => (
                    <div 
                        key={index} 
                        className={`services-content ${activeService === service ? 'active' : ''}`} 
                        onClick={() => handleClick(service)}
                    >
                        <div className='services-header'>
                            <h3>{service}</h3>
                            <hr />
                        </div>
                        
                        {service === 'Individual' && (
                            <>
                                <label>1 Usuário</label>
                                <select>
                                    <option value="">10 vídeos</option>
                                    <option value="basic">Básico</option>
                                    <option value="standard">Padrão</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </>
                        )}

                        {service === 'Profissional - Times' && (
                            <>
                                <label>1 - 10 Usuários</label>
                                <select>
                                    <option value="">Vídeos Ilimitados</option>
                                    <option value="basic">Básico</option>
                                    <option value="standard">Padrão</option>
                                    <option value="premium">Premium</option>
                                </select>

                                <label>+10 Usuários</label>
                                <select>
                                    <option value="">Vídeos Ilimitados</option>
                                    <option value="basic">Básico</option>
                                    <option value="standard">Padrão</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </>
                        )}

                        {service === 'Corporativo' && (
                            <>
                                <label>10 - 50 Usuários</label>
                                <select>
                                    <option value="">Vídeos Ilimitados</option>
                                    <option value="basic">Básico</option>
                                    <option value="standard">Padrão</option>
                                    <option value="premium">Premium</option>
                                </select>

                                <label>+50 Usuários</label>
                                <select>
                                    <option value="">Vídeos Ilimitados</option>
                                    <option value="basic">Básico</option>
                                    <option value="standard">Padrão</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </>
                        )}
                        
                        <button>{service === 'Corporativo' ? 'Entre em contato' : 'Cadastrar'}</button>
                    </div>
                ))}
            </div> 
        </section>
        </>
    )
}

export default About;