// Componente que combina los hooks useState y useEffect.
// useState administra el valor del contador, mientras que useEffect
// ejecuta un efecto secundario cada vez que el estado "count" cambia.
// El arreglo de dependencias [count] indica que el efecto solo se
// ejecutará después del renderizado cuando el valor del contador se actualice.
import { useState, useEffect } from "react";

// useEffect se ejecuta después de cada renderizado cuando "count" cambia.
// En este ejemplo, solo registra en la consola el nuevo valor del contador.
const CounterUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`El contador cambio a: ${count}`);
  }, [count]);

  return (
    <div>
      <p>El Contador esta en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
      <button onClick={() => setCount(count - 1)}>Disminuye</button>
    </div>
  );
};

export default CounterUseEffect;
