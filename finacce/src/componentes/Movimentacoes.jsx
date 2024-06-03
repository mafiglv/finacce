import React, { useState } from 'react';
import './Movimentacoes.css';
import editIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';
import observarIcon from '../assets/observar.png'; // Adicione esta linha

const Movimentacoes = ({ movimentacoes, setMovimentacoes }) => {
    const [filtro, setFiltro] = useState('');
    const [dataFiltro, setDataFiltro] = useState({ dia: '', mes: '', ano: '' });
    const [editandoIndice, setEditandoIndice] = useState(null);
    const [editandoValor, setEditandoValor] = useState('');

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const handleDataFiltroChange = (e) => {
        const { name, value } = e.target;
        setDataFiltro({ ...dataFiltro, [name]: value });
    };

    const iniciarEdicao = (index) => {
        setEditandoIndice(index);
        setEditandoValor(movimentacoes[index].valor);
    };

    const salvarEdicao = (index) => {
        const novasMovimentacoes = movimentacoes.map((mov, i) =>
            i === index ? { ...mov, valor: editandoValor } : mov
        );
        setMovimentacoes(novasMovimentacoes);
        setEditandoIndice(null);
    };

    const removerMovimentacao = (index) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir a movimentação ${movimentacoes[index].nome}?`);
        if (confirmacao) {
            setMovimentacoes(movimentacoes.filter((_, i) => i !== index));
        }
    };

    const filtrarMovimentacoes = (mov) => {
        if (filtro && mov.categoria !== filtro && mov.tipo !== filtro) return false;
        if (dataFiltro.dia && mov.dataCompra.dia !== dataFiltro.dia) return false;
        if (dataFiltro.mes && mov.dataCompra.mes !== dataFiltro.mes) return false;
        if (dataFiltro.ano && mov.dataCompra.ano !== dataFiltro.ano) return false;
        return true;
    };

    return (
        <div className="movimentacoes-page">
            <div className="movimentacoes-container">
                <h2>Movimentações</h2>
                <div className="filtros">
                    <select onChange={handleFiltroChange}>
                        <option value="">Todos</option>
                        <option value="ganho">Ganhos</option>
                        <option value="gasto">Gastos Essenciais</option>
                        <option value="outros">Outros Gastos</option>
                        <option value="energia">Energia</option>
                        <option value="agua">Água</option>
                        <option value="aluguel">Aluguel</option>
                        <option value="financiamento">Financiamento</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="escola">Escola</option>
                        <option value="faculdade">Faculdade</option>
                        <option value="transporte">Transporte</option>
                    </select>
                    <div className="filtro-data">
                        <input
                            type="number"
                            name="dia"
                            value={dataFiltro.dia}
                            onChange={handleDataFiltroChange}
                            placeholder="Dia"
                        />
                        <input
                            type="number"
                            name="mes"
                            value={dataFiltro.mes}
                            onChange={handleDataFiltroChange}
                            placeholder="Mês"
                        />
                        <input
                            type="number"
                            name="ano"
                            value={dataFiltro.ano}
                            onChange={handleDataFiltroChange}
                            placeholder="Ano"
                        />
                    </div>
                </div>
                {movimentacoes.filter(filtrarMovimentacoes).map((mov, index) => (
                    <div key={index} className="movimentacao-item">
                        <div className="movimentacao-info">
                            <img src={mov.logo || observarIcon} alt={mov.nome} />
                            <div>
                                <p>{mov.nome}</p>
                                {editandoIndice === index ? (
                                    <input
                                        type="number"
                                        value={editandoValor}
                                        onChange={(e) => setEditandoValor(e.target.value)}
                                    />
                                ) : (
                                    <p>R${mov.valor}</p>
                                )}
                                <p>Data: {`${mov.dataCompra.dia}/${mov.dataCompra.mes}/${mov.dataCompra.ano}`}</p>
                                <p>Forma de pagamento: {mov.formaPagamento}</p>
                                <p>Categoria: {mov.categoria}</p>
                                <p>Tipo: {mov.tipo}</p>
                            </div>
                        </div>
                        {editandoIndice === index ? (
                            <button className="btn salvar-btn" onClick={() => salvarEdicao(index)}>Salvar</button>
                        ) : (
                            <div className="icon-buttons">
                                <button className="edit-btn" onClick={() => iniciarEdicao(index)}>
                                    <img src={editIcon} alt="Edit" className="edit-icon" />
                                </button>
                                <button className="remove-btn" onClick={() => removerMovimentacao(index)}>
                                    <img src={removeIcon} alt="Remove" className="remove-icon" />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movimentacoes;
