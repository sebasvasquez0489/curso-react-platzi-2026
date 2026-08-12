import { PropertyCard } from "./PropertyCard";

export function PropertyList({ properties }) {
  //Renderizado opcional para carga si no hay datos
  if (properties.length === 0) {
    return (
      <section>
        <h3>Alojamientos disponibles</h3>
        <p>No se encuentran Alojamientos con esa descripción</p>
      </section>
    );
  }

  return (
    <section className="properties-section">
      <h3>Alojamientos disponibles</h3>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            location={property.location}
            image={property.image}
            type={property.type}
            price={property.price}
          />
        ))}
      </div>
    </section>
  );
}
