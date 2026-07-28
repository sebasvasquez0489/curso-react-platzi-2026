// Componente que muestra una lista de elementos utilizando el método map().
// El arreglo "items" almacena la información que será recorrida para generar
// dinámicamente un elemento <li> por cada posición del arreglo.
// La propiedad "key" permite a React identificar cada elemento de la lista
// para optimizar el proceso de renderizado y actualización del DOM.
const StaticComponent = () => {
  const items = ["Manzana", "Cereza", "Pera", "Mango"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default StaticComponent;
