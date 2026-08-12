import { PropertyCard } from "./PropertyCard";

export function PropertyList() {
  return (
    <section className="properties-section">
      <h3>Alojamientos disponibles</h3>
      <div className="properties-grid">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}
