import React, { useState, useEffect } from 'react';
import './VerPatrimonio.css';
import removeIcon from '../assets/remove.png';
import editIcon from '../assets/edit.png';
import iconPatrimonio from '../assets/iconpatrimonio.png';
import motoIcon from '../assets/moto.png';
import carroIcon from '../assets/carro.png';
import casaIcon from '../assets/casa.png';
import apartamentoIcon from '../assets/apartamento.png';
import barcoIcon from '../assets/barco.png';
import lanchaIcon from '../assets/lancha.png';

const VerPatrimonio = ({ patrimonios, setPatrimonios }) => {
    const [novoPatrimonio, setNovoPatrimonio] = useState({
        nome: '',
        valor: '',
        descricao: '',
        logo: iconPatrimonio
    });

    const [editandoIndice, setEditandoIndice] = useState(null);
    const [editandoValor, setEditandoValor] = useState('');
    const [totalPatrimonio, setTotalPatrimonio] = useState(0);

    useEffect(() => {
        const calcularTotal = () => {
            const total = patrimonios.reduce((acc, patrimonio) => acc + parseFloat(patrimonio.valor || 0), 0);
            setTotalPatrimonio(total);
        };

        calcularTotal();
    }, [patrimonios]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoPatrimonio({ ...novoPatrimonio, [name]: value });
    };

    const adicionarPatrimonio = () => {
        if (novoPatrimonio.nome && novoPatrimonio.valor && novoPatrimonio.descricao) {
            setPatrimonios([...patrimonios, novoPatrimonio]);
            setNovoPatrimonio({
                nome: '',
                valor: '',
                descricao: '',
                logo: iconPatrimonio
            });
        } else {
            alert('Todos os campos devem ser preenchidos!');
        }
    };

    const salvarAlteracoes = () => {
        alert('Alterações salvas com sucesso!');
    };

    const removerPatrimonio = (index) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir ${patrimonios[index].nome}?`);
        if (confirmacao) {
            setPatrimonios(patrimonios.filter((_, i) => i !== index));
        }
    };

    const iniciarEdicao = (index) => {
        setEditandoIndice(index);
        setEditandoValor(patrimonios[index].valor);
    };

    const salvarEdicao = (index) => {
        const novosPatrimonios = patrimonios.map((patrimonio, i) =>
            i === index ? { ...patrimonio, valor: editandoValor } : patrimonio
        );
        setPatrimonios(novosPatrimonios);
        setEditandoIndice(null);
    };

    const handleLogoChange = (e) => {
        setNovoPatrimonio({ ...novoPatrimonio, logo: e.target.value });
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setNovoPatrimonio({ ...novoPatrimonio, logo: upload.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="ver-patrimonio-page">
            <div className="ver-patrimonio-container">
                <h2>Meus patrimônios</h2>
                <p>Total: R${totalPatrimonio.toFixed(2)}</p>
                <div className="patrimonio-info">
                    {patrimonios.map((patrimonio, index) => (
                        <div key={index} className="patrimonio-item">
                            <img src={patrimonio.logo} alt={patrimonio.nome} />
                            <div>
                                <p>{patrimonio.nome}</p>
                                {editandoIndice === index ? (
                                    <input
                                        type="number"
                                        value={editandoValor}
                                        onChange={(e) => setEditandoValor(e.target.value)}
                                    />
                                ) : (
                                    <p>R${patrimonio.valor}</p>
                                )}
                            </div>
                            {editandoIndice === index ? (
                                <button className="btn salvar-btn" onClick={() => salvarEdicao(index)}>Salvar</button>
                            ) : (
                                <div className="icon-buttons">
                                    <button className="edit-btn" onClick={() => iniciarEdicao(index)}>
                                        <img src={editIcon} alt="Edit" className="edit-icon" />
                                    </button>
                                    <button className="remove-btn" onClick={() => removerPatrimonio(index)}>
                                        <img src={removeIcon} alt="Remove" className="remove-icon" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="adicionar-patrimonio">
                    <h3>Adicionar Novo Patrimônio</h3>
                    <form>
                        <input
                            type="text"
                            name="nome"
                            value={novoPatrimonio.nome}
                            onChange={handleInputChange}
                            placeholder="Nome do Patrimônio"
                        />
                        <input
                            type="number"
                            name="valor"
                            value={novoPatrimonio.valor}
                            onChange={handleInputChange}
                            placeholder="Valor"
                        />
                        <input
                            type="text"
                            name="descricao"
                            value={novoPatrimonio.descricao}
                            onChange={handleInputChange}
                            placeholder="Descrição"
                        />
                        <div className="upload-imagem">
                            <label htmlFor="upload-logo">Upload seu ícone</label>
                            <input
                                id="upload-logo"
                                type="file"
                                onChange={handleLogoUpload}
                            />
                            <label htmlFor="upload-logo" className="custom-file-upload">Escolher arquivo</label>
                        </div>
                        <select onChange={handleLogoChange}>
                            <option value={iconPatrimonio}>Padrão</option>
                            <option value={motoIcon}>Moto</option>
                            <option value={carroIcon}>Carro</option>
                            <option value={casaIcon}>Casa</option>
                            <option value={apartamentoIcon}>Apartamento</option>
                            <option value={barcoIcon}>Barco</option>
                            <option value={lanchaIcon}>Lancha</option>
                        </select>
                        <button type="button" onClick={adicionarPatrimonio} className="btn adicionar-btn">Adicionar</button>
                        <button type="button" onClick={salvarAlteracoes} className="btn salvar-btn">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerPatrimonio;
