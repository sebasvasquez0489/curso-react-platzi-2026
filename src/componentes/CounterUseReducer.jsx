import { useReducer } from "react";

// Reducer que define cómo cambia el estado según la acción recibida.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    // Mantiene el estado actual si la acción no es reconocida.
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  // useReducer recibe el reducer y el estado inicial.
  // state contiene el estado actual y dispatch permite enviar acciones.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-2xl font-bold">Contador: {state.count}</p>

      <div className="flex gap-2">
        {/* dispatch envía una acción al reducer para actualizar el estado. */}
        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={() => dispatch({ type: "increment" })}
        >
          Incrementar
        </button>

        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrementar
        </button>

        <button
          className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          onClick={() => dispatch({ type: "reset" })}
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default CounterUseReducer;
