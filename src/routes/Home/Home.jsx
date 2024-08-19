import React from 'react';
import '../../styles/base.css';
import './home.css'

function Home() {
    const data = [
        { id: 1, title: 'Youtube', content: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.', color: '#F1C2B0'},

        { id: 2, title: 'Tiktok', content: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
        color: '#F9EB98'},

        { id: 3, title: 'Facebook', content: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.', color: '#C0D9DD'},
        
        { id: 4, title: 'Instagram', content: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.', color: '#6975E8'},
    ];
    
    return (
        <>
            <section>
                <div>
                    <h1>Crie seus vídeos <br /> online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button>Começar agora!</button>
                </div>

                <div>
                    <img src="..\src\assets\img\video-mockup.png" alt="video mockup" />
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <h2></h2>
                        <h3></h3>
                        <p></p>
                    </div>
                    {data.map((row) => (
                        <div>
                            <h2>{row.id}</h2>
                            <h3>{row.title}</h3>
                            <p>{row.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
  );
}

export default Home;