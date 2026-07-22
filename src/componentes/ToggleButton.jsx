import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsAcive] = useState(false);
  return (
    <button onClick={() => setIsAcive(!isActive)}>
      {isActive ? "😎Activo" : "😴Inactivo"}
    </button>
  );
};

export default ToggleButton;
