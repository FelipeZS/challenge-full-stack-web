import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/grupoa.png';
import api from '../../services/api';

import UserItem from '../../components/UserItem/index.js';

import "./style.css";

function Listing() {
  const [students, setStudents] = useState([]);

  const [ra, setRa] = useState('');

  async function searchUser(event) {
    event.preventDefault();

    const response = await api.get('users', {
      params: {
        ra
      }
    });

    setStudents(response.data);
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
          <p>Consulta de alunos</p>
          <form className="form" onSubmit={searchUser}>
            <input type="text" placeholder="Digite sua busca informando o RA" value={ra} onChange={(event) => {setRa(event.target.value)}}/>
            <button type="submit" className="btn btn-1">PESQUISAR</button>
            <Link to="/register" className="btn btn-1">CADASTRAR</Link>
          </form>

          <main>
            {students.map(student => {
              return <UserItem key={student.ra} student={student}/>;
            })}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Listing;