// Componente funcional reutilizable que recibe datos mediante props.
// Las props son la forma en que un componente padre envía información
// a un componente hijo. En este caso, se desestructuran ({ titulo, descripcion })
// para acceder directamente a sus valores y mostrarlos en la interfaz.
// El componente se exporta para poder reutilizarlo en cualquier parte del proyecto.

const Card = ({ titulo, descripcion }) => {
  return (
    <section>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </section>
  );
};

export default Card;
