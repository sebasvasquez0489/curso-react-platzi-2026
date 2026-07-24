// ==================================================================
// TAILWIND CSS v4 + REACT + VITE (Instalación básica)
// ============================================================================
//
// 1. Crear un proyecto con Vite:
//    npm create vite@latest
//
// 2. Instalar Tailwind CSS y el plugin para Vite:
//    npm install tailwindcss @tailwindcss/vite
//
// 3. Importar Tailwind en el archivo principal de estilos (src/index.css) si se borro ese archivo volverlo a crear:
//    @import "tailwindcss";
//
// 4. Ejecutar el proyecto:
//    npm run dev
//
// A partir de este momento ya es posible utilizar las clases de utilidad
// de Tailwind directamente en los componentes JSX.
//
//Si la version es anterior si se debe configurar :
//
//Configurar el plugin de Tailwind en vite.config.js:
//    import { defineConfig } from "vite";
//    import react from "@vitejs/plugin-react";
//    import tailwindcss from "@tailwindcss/vite";
//
//    export default defineConfig({
//      plugins: [react(), tailwindcss()],
//    });============================================================================

const CardTailwind = () => {
  return (
    <section className="bg-green-900 rounded-lg shadow-xl shadow-gray-900/30 p-6">
      <h3 className="text-2xl font-bold mb-4">
        Instalación y uso de estilos con Tailwind CSS
      </h3>

      <button className="rounded-lg bg-blue-500 px-4 py-2 text-amber-300 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        Enviar
      </button>
    </section>
  );
};

export default CardTailwind;
