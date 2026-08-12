import { properties } from "./data/property";
import { PropertyCard } from "./PropertyCard";

export function PropertyList() {
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
