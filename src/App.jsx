import "./App.css";

//Importación de los componetes
import Card from "./componentes/Card";
import Counter from "./componentes/Counter";
import InputName from "./componentes/InputName";
import ToggleButton from "./componentes/ToggleButton";
import CounterUseEffect from "./componentes/CounterUseEffect";
import CardTailwind from "./componentes/CardTailwind";

function App() {
  return (
    <section>
      <h1>Curso React JS - Platzi 2026</h1>
      <h2>✅Creación de componentes</h2>
      <Card
        titulo="Componente # 1"
        descripcion="Creacion de mi primer componente"
      />
      <Card
        titulo="Componente # 2"
        descripcion="Reutilizando el primer componente"
      />
      <hr />
      <h2>✅Manejo de Estado - useState()</h2>
      <Counter /> <br />
      <ToggleButton /> <hr />
      <h2>✅Eventos y captura de información</h2>
      <InputName /> <hr />
      <h2>✅Estructura y uso de useEffect</h2>
      <CounterUseEffect /> <hr />
      <h2>✅Tailwind</h2>
      <CardTailwind />
    </section>
  );
}

export default App;
