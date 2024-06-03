import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import SecaoSaldo from './componentes/SecaoSaldo';
import SecaoGanhosGastos from './componentes/SecaoGanhosGastos';
import EquilibrioFinanceiro from './componentes/EquilibrioFinanceiro';
import Patrimonio from './componentes/Patrimonio';
import IndicadoresFinanceiros from './componentes/IndicadoresFinanceiros';
import SecaoAprendizagem from './componentes/SecaoAprendizagem';
import AjustarSaldo from './componentes/AjustarSaldo';
import VerPatrimonio from './componentes/VerPatrimonio';
import AdicionarMovimentacao from './componentes/AdicionarMovimentacao';
import Movimentacoes from './componentes/Movimentacoes';
import Aprendizagem from './componentes/Aprendizagem';
import HomePage from './componentes/HomePage';
import SecondPage from './componentes/SecondPage';
import ThirdPage from './componentes/ThirdPage';
import FourthPage from './componentes/FourthPage';
import SignupPage from './componentes/SignupPage';
import SignupStepTwo from './componentes/SignupStepTwo';
import SignupStepThree from './componentes/SignupStepThree';
import LoginPage from './componentes/LoginPage';
import './App.css';

import NubankLogo from './assets/nubank.png';
import ItauLogo from './assets/itau.png';
import BradescoLogo from './assets/bradesco.png';
import DinheiroLogo from './assets/dinheiro.png';
import carroIcon from './assets/carro.png';
import apartamentoIcon from './assets/apartamento.png';

const App = () => {
    const [contas, setContas] = useState([
        { nome: 'Nubank', saldo: 2000, logo: NubankLogo, tipo: 'Conta poupança' },
        { nome: 'Itaú', saldo: 1500, logo: ItauLogo, tipo: 'Cartão de crédito' },
        { nome: 'Bradesco', saldo: 500, logo: BradescoLogo, tipo: 'Conta corrente' },
        { nome: 'Dinheiro', saldo: 500, logo: DinheiroLogo, tipo: 'Dinheiro físico' },
    ]);

    const [patrimonios, setPatrimonios] = useState([
        { nome: 'Carro', valor: 20000, descricao: 'Carro 2018', logo: carroIcon },
        { nome: 'Apartamento', valor: 300000, descricao: 'Apartamento no centro', logo: apartamentoIcon },
    ]);

    const [movimentacoes, setMovimentacoes] = useState([]);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/second">
                        <SecondPage />
                    </Route>
                    <Route path="/third">
                        <ThirdPage />
                    </Route>
                    <Route path="/fourth">
                        <FourthPage />
                    </Route>
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/signup-step-two">
                        <SignupStepTwo />
                    </Route>
                    <Route path="/signup-step-three">
                        <SignupStepThree />
                    </Route>
                    <Route path="/login-page">
                        <LoginPage />
                    </Route>
                    <Route path="/home">
                        <Cabecalho isAjustarSaldo={false} />
                        <div className="content scrollbar">
                            <div className="grid-item">
                                <SecaoSaldo saldoTotal={4500} contas={contas} />
                            </div>
                            <div className="grid-item">
                                <SecaoGanhosGastos ganhos={4400} gastos={1007.5} />
                            </div>
                            <div className="grid-item">
                                <IndicadoresFinanceiros dados={{
                                    labels: ['Fev/2024', 'Mar/2024', 'Abr/2024'],
                                    gastosEssenciais: [1000, 1500, 2000],
                                    gastosNaoEssenciais: [500, 750, 1000],
                                }} />
                            </div>
                            <div className="grid-item">
                                <EquilibrioFinanceiro
                                    gastosEssenciais={{ quantia: 755, percentual: (755 / 3800) * 100 }}
                                    gastosNaoEssenciais={{ quantia: 252.5, percentual: (252.5 / 400) * 100 }}
                                />
                            </div>
                            <div className="grid-item">
                                <Patrimonio patrimonios={patrimonios} />
                                <Link to="/ver-patrimonio">
                                    <button className="btn">Ver Patrimônio</button>
                                </Link>
                                <Link to="/adicionar-patrimonio">
                                    <button className="btn">Adicionar Patrimônio</button>
                                </Link>
                            </div>
                            <div className="grid-item">
                                <SecaoAprendizagem />
                            </div>
                        </div>
                    </Route>
                    <Route path="/ajustar-saldos">
                        <Cabecalho isAjustarSaldo={true} />
                        <AjustarSaldo contas={contas} setContas={setContas} />
                    </Route>
                    <Route path="/ver-patrimonio">
                        <Cabecalho isVerPatrimonio={true} />
                        <VerPatrimonio patrimonios={patrimonios} setPatrimonios={setPatrimonios} />
                    </Route>
                    <Route path="/adicionar-movimentacao">
                        <Cabecalho isAjustarSaldo={true} />
                        <AdicionarMovimentacao movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} />
                    </Route>
                    <Route path="/movimentacoes">
                        <Cabecalho isAjustarSaldo={true} />
                        <Movimentacoes movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} />
                    </Route>
                    <Route path="/aprendizagem">
                        <Cabecalho isAjustarSaldo={true} />
                        <Aprendizagem />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
