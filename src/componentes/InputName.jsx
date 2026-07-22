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
