import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/grupoa.png';

import "./styles.css";

function RegisterList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRa] = useState('');
  const [cpf, setCpf] = useState('');

  function handleCreateUser(event) {
    event.preventDefault();

    api.post('users', {
      name,
      email,
      ra,
      cpf
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
    }).catch(() => {
      alert('Erro no cadastro!');
    })
    
  }

  return (
    <div className="container1">
      <div className="content first-content">
        <div className="first-column">
          <img src={logoImg} alt=""/>
          <p>Módulo Acadêmico</p>
          <Link to="/" className="btn btn-1">Alunos</Link>
        </div>
        <div className="second-column">
          <p>Cadastro de aluno</p>
          <form className="form" onSubmit={handleCreateUser}>
            <label>Nome</label>
            <input type="text" placeholder="Informe o nome completo" value={name} onChange={(event) => {setName(event.target.value)}}/>
            <label>E-mail</label>
            <input type="email" placeholder="Informe apenas um e-mail" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
            <label>RA</label>
            <input type="number" placeholder="Informe o registro acadêmico" value={ra} onChange={(event) => {setRa(event.target.value)}}/>
            <label>CPF</label>
            <input type="text" placeholder="Informe o número do documento" value={cpf} onChange={(event) => {setCpf(event.target.value)}}/>
            <Link to="/" className="btn btn-1">CANCELAR</Link>
            <button type="submit" className="btn btn-1">SALVAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterList;