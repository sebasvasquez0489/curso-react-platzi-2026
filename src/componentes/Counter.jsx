//Se importa el hook, se crea constante en forma de desestructuración
// donde el primer valor sera para poder leerlo y el segundo para actualizarlo y
// se utiliza hook useState con el valor inicial
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
