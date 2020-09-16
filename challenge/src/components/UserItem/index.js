import React from 'react';

import "./styles.css"

function UserItem({student, remove}) {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Registro Acadêmico</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{student.ra}</td>
          <td>{student.name}</td>
          <td>{student.cpf}</td>
          <td><button>Editar</button><button>Excluir</button></td>
        </tr>
      </tbody>
    </table>
  );
}
  
  export default UserItem;