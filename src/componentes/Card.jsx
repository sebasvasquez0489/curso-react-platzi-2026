// Creamos el componente con el mismo nombre del Archivo y con la primera letra en Mayuscula y
// agregamos props las cuales debe llevar {} tanto el la funcion flecha como el elemento para que sea reutilizable,
// luego se debe exportar para poder ser utilizado

const Card = ({ titulo, descripcion }) => {
  return (
    <section>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </section>
  );
};

export default Card;
