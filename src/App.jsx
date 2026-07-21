import "./App.css";
import Card from "./componentes/Card"; //Importación del componente

function App() {
  return (
    <section>
      <h1>Curso React JS - Platzi 2026</h1>
      <Card
        titulo="Componente # 1"
        descripcion="Creacion de mi primer componente"
      />
      <Card
        titulo="Componente # "
        descripcion="Reutilizando el primer componente"
      />
    </section>
  );
}

export default App;
