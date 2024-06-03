import React, { useState } from 'react';
import './AjustarSaldo.css';
import removeIcon from '../assets/remove.png';
import editIcon from '../assets/edit.png';

const AjustarSaldo = ({ contas, setContas }) => {
    const [novaConta, setNovaConta] = useState({
        nome: '',
        saldo: '',
        logo: '',
        tipo: ''
    });

    const [editandoIndice, setEditandoIndice] = useState(null);
    const [editandoSaldo, setEditandoSaldo] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaConta({ ...novaConta, [name]: value });
    };

    const adicionarConta = () => {
        if (novaConta.nome && novaConta.saldo && novaConta.tipo) {
            setContas([...contas, novaConta]);
            setNovaConta({
                nome: '',
                saldo: '',
                logo: '',
                tipo: ''
            });
        } else {
            alert('Todos os campos devem ser preenchidos!');
        }
    };

    const salvarAlteracoes = () => {
        alert('Alterações salvas com sucesso!');
    };

    const removerConta = (index) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir ${contas[index].nome}?`);
        if (confirmacao) {
            setContas(contas.filter((_, i) => i !== index));
        }
    };

    const iniciarEdicao = (index) => {
        setEditandoIndice(index);
        setEditandoSaldo(contas[index].saldo);
    };

    const salvarEdicao = (index) => {
        const novasContas = contas.map((conta, i) =>
            i === index ? { ...conta, saldo: editandoSaldo } : conta
        );
        setContas(novasContas);
        setEditandoIndice(null);
    };

    const handleTipoChange = (e) => {
        const { value } = e.target;
        if (value === 'Nenhuma das opções') {
            setNovaConta({ ...novaConta, tipo: '' });
        } else {
            setNovaConta({ ...novaConta, tipo: value });
        }
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setNovaConta({ ...novaConta, logo: upload.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="ajustar-saldo-page">
            <div className="ajustar-saldo-container">
                <h2>Meus saldos</h2>
                <div className="ajustar-saldo-form">
                    {contas.map((conta, index) => (
                        <div key={index} className="ajustar-saldo-item">
                            <img src={conta.logo} alt={conta.nome} className="logo" />
                            <div className="ajustar-saldo-info">
                                <p>{conta.nome}</p>
                                {editandoIndice === index ? (
                                    <input
                                        type="number"
                                        value={editandoSaldo}
                                        onChange={(e) => setEditandoSaldo(e.target.value)}
                                    />
                                ) : (
                                    <p>R${conta.saldo}</p>
                                )}
                            </div>
                            {editandoIndice === index ? (
                                <button className="btn salvar-btn" onClick={() => salvarEdicao(index)}>Salvar</button>
                            ) : (
                                <div className="icon-buttons">
                                    <button className="edit-btn" onClick={() => iniciarEdicao(index)}>
                                        <img src={editIcon} alt="Edit" className="edit-icon" />
                                    </button>
                                    <button className="remove-btn" onClick={() => removerConta(index)}>
                                        <img src={removeIcon} alt="Remove" className="remove-icon" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <h3>Adicionar Nova Carteira</h3>
                <div className="selecionar-banco-container">
                    <p>Escolha o tipo de saldo e preencha as informações:</p>
                    <input
                        type="text"
                        name="nome"
                        value={novaConta.nome}
                        onChange={handleInputChange}
                        placeholder="Nome do Banco"
                    />
                    <input
                        type="number"
                        name="saldo"
                        value={novaConta.saldo}
                        onChange={handleInputChange}
                        placeholder="Saldo"
                    />
                </div>
                <div className="upload-imagem">
                    <label htmlFor="upload-logo">Upload seu ícone</label>
                    <input
                        id="upload-logo"
                        type="file"
                        onChange={handleLogoUpload}
                    />
                    <label className="custom-file-upload" htmlFor="upload-logo">
                        Escolher arquivo
                    </label>
                </div>
                <div className="tipo-container">
                    <label htmlFor="tipo-selecao">Selecione o tipo de saldo:</label>
                    <select
                        id="tipo-selecao"
                        name="tipo"
                        value={novaConta.tipo}
                        onChange={handleTipoChange}
                    >
                        <option value="">Selecione o tipo</option>
                        <option value="Conta-Corrente">Conta-Corrente</option>
                        <option value="Poupança">Poupança</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Nenhuma das opções">Nenhuma das opções</option>
                    </select>
                    {novaConta.tipo === '' && (
                        <input
                            type="text"
                            name="tipo"
                            value={novaConta.tipo}
                            onChange={handleInputChange}
                            placeholder="Digite o tipo"
                        />
                    )}
                </div>
                <button onClick={adicionarConta} className="btn adicionar-btn">Adicionar</button>
                <button onClick={salvarAlteracoes} className="btn salvar-btn">Salvar</button>
            </div>
        </div>
    );
};

export default AjustarSaldo;
