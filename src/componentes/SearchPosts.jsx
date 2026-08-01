import { useState, useEffect } from "react";

// -----------------------------------------------------------------------------
// Componente: SearchPosts
// Objetivo: Consumir una API y filtrar publicaciones en tiempo real según
// el texto ingresado por el usuario.
// Conceptos: useState, useEffect, fetch, búsqueda dinámica y renderizado con map().
// -----------------------------------------------------------------------------

const SearchPosts = () => {
  // Estado para almacenar el texto de búsqueda.
  const [query, setQuery] = useState("");

  // Estado que almacena las publicaciones obtenidas desde la API.
  const [posts, setPosts] = useState([]);

  // Ejecuta una nueva petición cada vez que cambia el valor de "query".
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data", error));
  }, [query]);

  return (
    <div>
      <h2 className="text-teal-600 text-2xl m-4 text-center">
        Búsqueda con estados
      </h2>

      {/* Input controlado que actualiza el estado de búsqueda */}
      <input
        className="bg-green-200 fill-zinc-50 text-black text-center placeholder:text-gray-400 m-5 rounded-lg"
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <ul>
        {/* Renderiza las publicaciones que coinciden con la búsqueda */}
        {posts.map((post) => (
          <li key={post.id}>
            <strong className="text-green-400">Título:</strong>{" "}
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPosts;
