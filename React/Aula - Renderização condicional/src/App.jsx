import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar cliente</button>

const hasCustomer = true

const App = () => {

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

      {hasCustomer ? renderShowHistory() : renderAddCustomer()}

      <div>
        {showCustomer()}
      </div>
    </div>
  );
};

export default App;