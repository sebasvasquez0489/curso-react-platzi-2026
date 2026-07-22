// Ejemplo de componente controlado en React.
// useState administra el estado del input, mientras que onChange actualiza
// el estado con cada cambio y el valor se refleja automáticamente en la interfaz.
import { useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Bienvenido, {name || "Visitante"} </p>
    </div>
  );
};

export default InputName;
