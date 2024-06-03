import React, { useState } from 'react';
import './AdicionarMovimentacao.css';
import uploadIcon from '../assets/upload.png';
import observarIcon from '../assets/observar.png';

const AdicionarMovimentacao = ({ movimentacoes, setMovimentacoes, atualizarGanhosGastos }) => {
    const [novaMovimentacao, setNovaMovimentacao] = useState({
        tipo: '',
        nome: '',
        valor: '',
        formaPagamento: '',
        dataCompra: {
            dia: '',
            mes: '',
            ano: ''
        },
        comprovante: null,
        categoria: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'dia' || name === 'mes' || name === 'ano') {
            setNovaMovimentacao({
                ...novaMovimentacao,
                dataCompra: { ...novaMovimentacao.dataCompra, [name]: value }
            });
        } else {
            setNovaMovimentacao({ ...novaMovimentacao, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNovaMovimentacao({ ...novaMovimentacao, comprovante: file });
        }
    };

    const adicionarMovimentacao = () => {
        if (novaMovimentacao.tipo && novaMovimentacao.nome && novaMovimentacao.valor &&
            novaMovimentacao.formaPagamento && novaMovimentacao.dataCompra.dia &&
            novaMovimentacao.dataCompra.mes && novaMovimentacao.dataCompra.ano) {
            setMovimentacoes([...movimentacoes, novaMovimentacao]);
            atualizarGanhosGastos(novaMovimentacao);
            setNovaMovimentacao({
                tipo: '',
                nome: '',
                valor: '',
                formaPagamento: '',
                dataCompra: {
                    dia: '',
                    mes: '',
                    ano: ''
                },
                comprovante: null,
                categoria: ''
            });
        } else {
            alert('Todos os campos devem ser preenchidos!');
        }
    };

    return (
        <div className="adicionar-movimentacao-page">
            <div className="adicionar-movimentacao-container">
                <h2>Adicionar Movimentação</h2>
                <form>
                    <div className="ganhos-gastos-selecao">
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="ganho"
                                checked={novaMovimentacao.tipo === 'ganho'}
                                onChange={handleInputChange}
                            />
                            Ganho
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="gasto"
                                checked={novaMovimentacao.tipo === 'gasto'}
                                onChange={handleInputChange}
                            />
                            Gasto
                        </label>
                    </div>
                    {novaMovimentacao.tipo === 'gasto' && (
                        <select name="categoria" value={novaMovimentacao.categoria} onChange={handleInputChange}>
                            <option value="">Selecione o tipo de gasto</option>
                            <option value="energia">Energia</option>
                            <option value="agua">Água</option>
                            <option value="aluguel">Aluguel</option>
                            <option value="financiamento">Financiamento</option>
                            <option value="alimentacao">Alimentação</option>
                            <option value="escola">Escola</option>
                            <option value="faculdade">Faculdade</option>
                            <option value="transporte">Transporte</option>
                            <option value="outros">Outros</option>
                        </select>
                    )}
                    {novaMovimentacao.tipo === 'ganho' && (
                        <select name="categoria" value={novaMovimentacao.categoria} onChange={handleInputChange}>
                            <option value="">Selecione o tipo de ganho</option>
                            <option value="aluguel">Aluguel</option>
                            <option value="vendas">Vendas</option>
                            <option value="salario">Salário</option>
                            <option value="renda extra">Renda Extra</option>
                        </select>
                    )}
                    <input
                        type="text"
                        name="nome"
                        value={novaMovimentacao.nome}
                        onChange={handleInputChange}
                        placeholder="Nome"
                    />
                    <input
                        type="number"
                        name="valor"
                        value={novaMovimentacao.valor}
                        onChange={handleInputChange}
                        placeholder="Valor"
                    />
                    <div className="forma-pagamento">
                        <p>Forma de pagamento</p>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="Crédito"
                                checked={novaMovimentacao.formaPagamento === 'Crédito'}
                                onChange={handleInputChange}
                            />
                            Cartão de Crédito
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="À vista"
                                checked={novaMovimentacao.formaPagamento === 'À vista'}
                                onChange={handleInputChange}
                            />
                            À vista
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="Dinheiro"
                                checked={novaMovimentacao.formaPagamento === 'Dinheiro'}
                                onChange={handleInputChange}
                            />
                            Dinheiro
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="Pix"
                                checked={novaMovimentacao.formaPagamento === 'Pix'}
                                onChange={handleInputChange}
                            />
                            Pix
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="Depósito"
                                checked={novaMovimentacao.formaPagamento === 'Depósito'}
                                onChange={handleInputChange}
                            />
                            Depósito
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="formaPagamento"
                                value="Transferência"
                                checked={novaMovimentacao.formaPagamento === 'Transferência'}
                                onChange={handleInputChange}
                            />
                            Transferência
                        </label>
                    </div>
                    <div className="data-compra">
                        <p>Data de compra</p>
                        <input
                            type="number"
                            name="dia"
                            value={novaMovimentacao.dataCompra.dia}
                            onChange={handleInputChange}
                            placeholder="Dia"
                        />
                        <input
                            type="number"
                            name="mes"
                            value={novaMovimentacao.dataCompra.mes}
                            onChange={handleInputChange}
                            placeholder="Mês"
                        />
                        <input
                            type="number"
                            name="ano"
                            value={novaMovimentacao.dataCompra.ano}
                            onChange={handleInputChange}
                            placeholder="Ano"
                        />
                    </div>
                    <div className="comprovante">
                        <p>Comprovante</p>
                        <label htmlFor="comprovante-upload" className="custom-file-upload">
                            <img src={uploadIcon} alt="Upload" />
                            Insira seu comprovante
                        </label>
                        <input
                            id="comprovante-upload"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="button" onClick={adicionarMovimentacao} className="btn adicionar-btn">Adicionar</button>
                </form>
                <h3>Gastos Essenciais</h3>
                {movimentacoes.filter(mov => mov.tipo === 'gasto' && mov.categoria !== 'outros').map((mov, index) => (
                    <div key={index} className="movimentacao-item">
                        <div className="movimentacao-info">
                            <img src={mov.logo || observarIcon} alt={mov.nome} />
                            <div>
                                <p>{mov.nome}</p>
                                <p>R${mov.valor}</p>
                                <p>Data de compra: {`${mov.dataCompra.dia}/${mov.dataCompra.mes}/${mov.dataCompra.ano}`}</p>
                                <p>Forma de pagamento: {mov.formaPagamento}</p>
                            </div>
                        </div>
                        <button className="btn observar-comprovante">Observar comprovante</button>
                    </div>
                ))}
                <h3>Outros Gastos</h3>
                {movimentacoes.filter(mov => mov.tipo === 'gasto' && mov.categoria === 'outros').map((mov, index) => (
                    <div key={index} className="movimentacao-item">
                        <div className="movimentacao-info">
                            <img src={mov.logo || observarIcon} alt={mov.nome} />
                            <div>
                                <p>{mov.nome}</p>
                                <p>R${mov.valor}</p>
                                <p>Data de compra: {`${mov.dataCompra.dia}/${mov.dataCompra.mes}/${mov.dataCompra.ano}`}</p>
                                <p>Forma de pagamento: {mov.formaPagamento}</p>
                            </div>
                        </div>
                        <button className="btn observar-comprovante">Observar comprovante</button>
                    </div>
                ))}
                <h3>Ganhos</h3>
                {movimentacoes.filter(mov => mov.tipo === 'ganho').map((mov, index) => (
                    <div key={index} className="movimentacao-item">
                        <div className="movimentacao-info">
                            <img src={mov.logo || observarIcon} alt={mov.nome} />
                            <div>
                                <p>{mov.nome}</p>
                                <p>R${mov.valor}</p>
                                <p>Data de compra: {`${mov.dataCompra.dia}/${mov.dataCompra.mes}/${mov.dataCompra.ano}`}</p>
                                <p>Forma de pagamento: {mov.formaPagamento}</p>
                            </div>
                        </div>
                        <button className="btn observar-comprovante">Observar comprovante</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdicionarMovimentacao;
