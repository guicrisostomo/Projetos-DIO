import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Guilherme Crisostomo',
    skills: ['React', 'JavaScript', 'HTML', 'CSS']
  },

  {
    id: 2,
    name: 'Nice',
    skills: ['C++', 'C#', 'VBA', 'Assembly']
  },

  {
    id: 3,
    name: 'Vitor',
    skills: ['Phython']
  },

  {
    id: 4,
    name: 'Ana',
    skills: ['Go']
  },
]

const App = () => {

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }
  const renderShowHistory = () => {
    return (
      <div>
        Clique no botão abaixo para visualizar o histórico dos clientes
        <br />
        {buttonA}
      </div>
    )
  }

  const renderAddCustomer = () => {
    return (
      <div>
        Clique abaixo para cadastrar o cliente
        <br />
        {buttonB}
      </div>
    )
  }

  const showCustomer = () => {
    if (!hasCustomer) return null

    return (
      <div>
        <h1>Nome do cliente: Guilherme</h1>
      </div>
    )
  }

  return (
    <div>
      <p>Bem vindo a nossa aula =D.</p>

      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};

export default App;