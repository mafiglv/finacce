import React, { useState } from 'react';
import './AdicionarMovimentacao.css';
import uploadIcon from '../assets/upload.png';

const AdicionarMovimentacao = ({ movimentacoes, setMovimentacoes }) => {
    const [novaMovimentacao, setNovaMovimentacao] = useState({
        nome: '',
        valor: '',
        tipo: 'Gasto',
        categoria: '',
        formaPagamento: '',
        dataCompra: {
            dia: '',
            mes: '',
            ano: ''
        },
        comprovante: null
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
        if (novaMovimentacao.nome && novaMovimentacao.valor && novaMovimentacao.categoria &&
            novaMovimentacao.formaPagamento && novaMovimentacao.dataCompra.dia &&
            novaMovimentacao.dataCompra.mes && novaMovimentacao.dataCompra.ano) {
            setMovimentacoes([...movimentacoes, novaMovimentacao]);
            setNovaMovimentacao({
                nome: '',
                valor: '',
                tipo: 'Gasto',
                categoria: '',
                formaPagamento: '',
                dataCompra: {
                    dia: '',
                    mes: '',
                    ano: ''
                },
                comprovante: null
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
                    <div className="tipo-movimentacao">
                        <p>Tipo de Movimentação</p>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="Ganho"
                                checked={novaMovimentacao.tipo === 'Ganho'}
                                onChange={handleInputChange}
                            />
                            Ganho
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="Gasto"
                                checked={novaMovimentacao.tipo === 'Gasto'}
                                onChange={handleInputChange}
                            />
                            Gasto
                        </label>
                    </div>
                    <input
                        type="text"
                        name="nome"
                        value={novaMovimentacao.nome}
                        onChange={handleInputChange}
                        placeholder="Qual o nome da sua movimentação?"
                    />
                    <input
                        type="number"
                        name="valor"
                        value={novaMovimentacao.valor}
                        onChange={handleInputChange}
                        placeholder="Qual o valor da sua movimentação?"
                    />
                    <div className="forma-pagamento">
                        <p>Forma de Pagamento</p>
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
                        <p>Data de Compra</p>
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
            </div>
        </div>
    );
};

export default AdicionarMovimentacao;
