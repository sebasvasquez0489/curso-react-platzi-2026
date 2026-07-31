import { useEffect, useState } from "react";

// -----------------------------------------------------------------------------
// Componente: UserListFetchLoading
// -----------------------------------------------------------------------------
// Objetivo:
// Consumir una API utilizando async/await y controlar los diferentes estados
// de la petición (carga, éxito y error).
//
// Conceptos aplicados:
// ✔ useState
// ✔ useEffect
// ✔ Fetch API
// ✔ async / await
// ✔ try / catch / finally
// ✔ Estado de carga (Loading)
// ✔ Manejo de errores (Error Handling)
// ✔ Renderizado condicional
// ✔ Renderizado dinámico con map()
// -----------------------------------------------------------------------------

const UserListFetchLoading = () => {
  // Estado que almacena la lista de usuarios obtenida desde la API.
  const [users, setUsers] = useState([]);

  // Estado que controla si la petición aún está en proceso.
  // Inicia en true porque la información todavía no ha sido cargada.
  const [isLoading, setIsLoading] = useState(true);

  // Estado que almacena posibles errores durante la petición.
  // Su valor inicial es null porque inicialmente no existe ningún error.
  const [error, setError] = useState(null);

  // useEffect ejecuta la petición una sola vez cuando el componente se monta.
  useEffect(() => {
    // Función asíncrona encargada de consumir la API.
    const fetchUsers = async () => {
      try {
        // Realiza una petición HTTP GET.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        // Verifica que la respuesta del servidor sea exitosa.
        // Si response.ok es false, se genera una excepción.
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        // Convierte la respuesta a formato JSON.
        const data = await response.json();

        // Actualiza el estado con los usuarios obtenidos.
        setUsers(data);
      } catch (error) {
        // Guarda el error para mostrar un mensaje al usuario.
        setError(error);
      } finally {
        // Se ejecuta siempre, exista o no un error.
        // Finaliza el estado de carga.
        setIsLoading(false);
      }
    };

    // Ejecuta la función encargada de consumir la API.
    fetchUsers();
  }, []);

  // Renderizado condicional mientras la petición está en proceso.
  if (isLoading) {
    return <p className="text-center text-green-600">Cargando usuarios...</p>;
  }

  // Renderizado condicional cuando ocurre un error.
  if (error) {
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-teal-600 text-2xl m-4 text-center">
        ✅ Dinámicos con estado de carga y error
      </h2>

      <ul>
        {/* map() recorre el arreglo de usuarios y genera
            un elemento JSX por cada registro recibido. */}
        {users.map((user) => (
          // key permite a React identificar cada elemento
          // para optimizar el proceso de renderizado.
          <li key={user.id} className="mb-2 rounded-lg border p-4 shadow-sm">
            <strong className="text-green-400">Nombre:</strong>{" "}
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListFetchLoading;
