import React, { useState } from 'react';

function Counter() {
  // Definimos el estado para almacenar el valor del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador de Botones</h1>
      <p>Valor actual del contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
