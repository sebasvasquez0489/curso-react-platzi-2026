// Componente que utiliza el hook useState para controlar un contador.
// count representa el valor actual del estado y setCount permite actualizarlo.
// El contador inicia en 0 y los botones incrementan o disminuyen su valor,
// provocando que React vuelva a renderizar el componente con el nuevo estado.
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>El contador esta en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
      <button onClick={() => setCount(count - 1)}>Disminuye</button>
    </div>
  );
};

export default Counter;
