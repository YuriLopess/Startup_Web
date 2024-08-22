import React from 'react';
import './footer.css';
import '../../styles/base.css';

function Footer(props) {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Serviços</h4>
                    <ul>
                        <li>Desenvolvimento Web</li>
                        <li>Desenvolvimento de Aplicativos</li>
                        <li>Otimização para Motores de Busca (SEO)</li>
                        <li>Consultoria em TI</li>
                        <li>Design Gráfico</li>
                        <li>Suporte Técnico</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Privacidade</h4>
                    <ul>
                        <li>Política de Privacidade</li>
                        <li>Termos de Serviço</li>
                        <li>Política de Cookies</li>
                        <li>Proteção de Dados</li>
                        <li>Segurança</li>
                        <li>Direitos do Usuário</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contato</h4>
                    <ul>
                        <li>Email: contact@example.com</li>
                        <li>Telefone: +1 234 567 890</li>
                        <li>Endereço: Rua Exemplo, 123, Cidade, País</li>
                        <li>Suporte</li>
                        <li>Feedback</li>
                        <li>Carreiras</li>
                    </ul>
                </div>
            </div>
            
            <h5 className="copyright">
                <i className="fa-regular fa-copyright"></i> 2024 Todos os direitos reservados
            </h5>
        </footer>
    );
}

export default Footer;