import { useEffect, useState } from "react";

// -----------------------------------------------------------------------------
// Componente: UserListFetch
// -----------------------------------------------------------------------------
// Objetivo:
// Consumir una API REST utilizando fetch() y mostrar la información recibida
// mediante un renderizado dinámico en React.
//
// Conceptos aplicados:
// ✔ useState
// ✔ useEffect
// ✔ Fetch API
// ✔ Promesas (.then y .catch)
// ✔ Renderizado dinámico
// ✔ Renderizado de listas con map()
// ✔ Uso de la propiedad key
// -----------------------------------------------------------------------------

const UserListFetch = () => {
  // useState crea una variable de estado llamada "users".
  // Inicialmente contiene un arreglo vacío porque aún no existen datos.
  // setUsers será la función encargada de actualizar el estado.
  const [users, setUsers] = useState([]);

  // useEffect ejecuta código después del primer renderizado del componente.
  // El arreglo de dependencias vacío [] indica que este efecto se ejecutará
  // una sola vez al montar el componente.
  useEffect(() => {
    // fetch realiza una petición HTTP GET a la API indicada.
    fetch("https://jsonplaceholder.typicode.com/users")
      // Convierte la respuesta recibida a formato JSON.
      .then((response) => response.json())

      // Guarda los datos obtenidos en el estado "users".
      // Al actualizar el estado, React vuelve a renderizar el componente
      // mostrando la información recibida.
      .then((data) => setUsers(data))

      // Captura posibles errores durante la petición.
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      {/* Título del componente */}
      <h2 className="text-teal-600 text-2xl m-4 text-center">
        ✅ Datos Dinámicos con Fetch
      </h2>

      <ul>
        {/* map() recorre cada objeto del arreglo users y genera
            dinámicamente un elemento <li> por cada usuario recibido
            desde la API. */}
        {users.map((user) => (
          // key ayuda a React a identificar de forma única cada elemento
          // para optimizar el renderizado y las actualizaciones del DOM.
          <li key={user.id} className="mb-2 rounded-lg border p-4 shadow-sm">
            <strong className="text-green-400">Nombre:</strong>{" "}
            <span>{user.name}</span>
            <br />
            <strong className="text-green-400">Email:</strong>{" "}
            <span>{user.email}</span>
            <br />
            <strong className="text-green-400">Ciudad:</strong>{" "}
            {/* address es un objeto dentro del usuario.
                Se accede utilizando la notación de punto. */}
            <span>{user.address.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListFetch;
