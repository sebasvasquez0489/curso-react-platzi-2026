// Componente que utiliza el hook useState para controlar un estado booleano.
// isActive almacena si el botón está activo o inactivo, mientras que
// setIsActive actualiza ese estado. Al hacer clic, el operador ! invierte
// el valor actual (true ↔ false) y React vuelve a renderizar el componente
// mostrando el texto correspondiente.

import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "😎Activo" : "😴Inactivo"}
    </button>
  );
};

export default ToggleButton;
