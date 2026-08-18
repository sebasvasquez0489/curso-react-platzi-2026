//Importación de los componetes
// import Card from "./componentes/Card";
// import Counter from "./componentes/Counter";
// import InputName from "./componentes/InputName";
// import ToggleButton from "./componentes/ToggleButton";
// import CounterUseEffect from "./componentes/CounterUseEffect";
// import CardTailwind from "./componentes/CardTailwind";
// import StaticComponent from "./componentes/StaticComponent";
// import UserListFetch from "./componentes/UserListFetch";
// import UserListFetchLoading from "./componentes/UserListFetchLoading";
//import SearchPosts from "./componentes/SearchPosts";

//Importación de componentes curso React JS - Platzi 2026 actualizado
import { useState } from "react";
import { Header } from "./cuso_actualizado/Header";
import { Hero } from "./cuso_actualizado/Hero";
import { SearchBar } from "./cuso_actualizado/SearchBar";
import { PropertyList } from "./cuso_actualizado/PropertyList";
import { properties } from "./cuso_actualizado/data/properties";

//Ejemplos Curso inicial
//   <section>
//   <h2>✅Creación de componentes</h2>
//   <Card
//     titulo="Componente # 1"
//     descripcion="Creacion de mi primer componente"
//   />
//   <Card
//     titulo="Componente # 2"
//     descripcion="Reutilizando el primer componente"
//   />
//   <hr />
//   <h2>✅Manejo de Estado - useState()</h2>
//   <Counter /> <br />
//   <ToggleButton /> <hr />
//   <h2>✅Eventos y captura de información</h2>
//   <InputName /> <hr />
//   <h2>✅Estructura y uso de useEffect</h2>
//   <CounterUseEffect /> <hr />
//   <h2>✅Tailwind</h2>
//   <CardTailwind /> <hr />
//   <h2>✅Datos estaticos</h2>
//   <StaticComponent />
//   <hr />
//   <UserListFetch />
//   <hr />
//   <UserListFetchLoading />
//   <SearchPosts />
// </section>

function App() {
  // Valores actuales de los inputs
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  // Valores que realmente se aplican al filtro
  const [searchedCity, setSearchedCity] = useState("");
  const [searchedType, setSearchedType] = useState("");

  // Filtrado de propiedades
  const filteredProperties = properties.filter((property) => {
    const matchesCity =
      !searchedCity ||
      property.location.toLowerCase().includes(searchedCity.toLowerCase());

    const matchesType =
      !searchedType ||
      property.type.toLowerCase().includes(searchedType.toLowerCase());

    return matchesCity && matchesType;
  });

  // Se ejecuta únicamente cuando se presiona el botón Buscar
  function handleSearch() {
    setSearchedCity(city.trim());
    setSearchedType(type.trim());
  }

  // Limpia los inputs y también los filtros aplicados
  function handleClear() {
    setCity("");
    setType("");

    setSearchedCity("");
    setSearchedType("");
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar
          city={city}
          type={type}
          searchedCity={searchedCity}
          searchedType={searchedType}
          onChangeCity={setCity}
          onChangeType={setType}
          onSearch={handleSearch}
          onClear={handleClear}
        />

        <PropertyList properties={filteredProperties} />
      </main>
    </div>
  );
}

export default App;
