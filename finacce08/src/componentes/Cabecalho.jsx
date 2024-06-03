import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cabecalho.css';
import UserIcon from '../assets/user.png';
import Logo from '../assets/logo.png';
import NotificationIcon from '../assets/notification.png';
import VoltarIcon from '../assets/voltar.png';

const Cabecalho = ({ isAjustarSaldo, isVerPatrimonio }) => {
    const history = useHistory();

    const handleBackClick = () => {
        history.push('/');
    };

    return (
        <div className="cabecalho">
            <div className="menu-usuario">
                <img src={UserIcon} alt="User Menu" role="button" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-content">
                    <a href="/perfil">Perfil</a>
                    <a href="/configuracoes">Configurações</a>
                    <a href="/ajuda">Ajuda</a>
                    <a href="/sair">Sair</a>
                </div>
            </div>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="icon-container">
                {isAjustarSaldo || isVerPatrimonio ? (
                    <img src={VoltarIcon} alt="Voltar" onClick={handleBackClick} />
                ) : (
                    <img src={NotificationIcon} alt="Notificações" />
                )}
            </div>
        </div>
    );
};

export default Cabecalho;
