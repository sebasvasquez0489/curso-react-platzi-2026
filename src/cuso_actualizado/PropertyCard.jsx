export function PropertyCard({ title, location, price, image, type }) {
  return (
    <article className="property-card">
      <img src={image} alt={title} />
      <div className="property-card-content">
        <h4>{title}</h4>
        <p>{location}</p>
        <p>{type} </p>
        <strong>${price} / Noche</strong>
      </div>
    </article>
  );
}
