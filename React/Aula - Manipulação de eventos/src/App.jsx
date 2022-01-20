import React from "react";

const showEvent = (e) => {
  console.log('evento clicado')
  console.log(e)
}

const Button = <button onClick={showEvent}>Mostrar Evento</button>

const App = () => {

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }
  
  return (
    <div>
      <input onChange={handleChange} />
      {Button}
    </div>
  );
};

export default App;