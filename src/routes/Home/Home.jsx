import React from 'react';
import '../../styles/base.css';
import './home.css'

function Home() {
    const data = [
        { id: 1, title: 'Youtube', paragraph: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.', color: '#7fa4a4'},

        { id: 2, title: 'Tiktok', paragraph: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
        color: '#507b88'},

        { id: 3, title: 'Facebook', paragraph: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.', color: '#367aa2'},
        
        { id: 4, title: 'Instagram', paragraph: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.', color: '#4b8a8a'},
    ];
    
    return (
        <>
            <section className='class-top'>
                <div className='left-content'>
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button className='button'>Começar agora!</button>
                </div>

                <div className='right-content'>
                    <img src="..\src\assets\img\video-mockup.png" alt="video mockup" id='video-mockup'/>
                </div>
            </section>

            <section>
                <div className='class-bottom'>
                    {data.map((row) => (
                        <div key={row.id} style={{ backgroundColor: row.color}} className='block-data'>
                            <h2>{row.id }</h2>
                            <h3>{row.title}</h3>
                            <p>{row.paragraph}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
  );
}

export default Home;