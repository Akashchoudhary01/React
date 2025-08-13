import { useState, useEffect } from "react";
import { TodoProvider } from "./context/index.js";
import TodoForm from "./Components/TodoForm.jsx";
import TodoItems from "./Components/TodoItems.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Load from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, toggleCompleted, deleteTodo, editTodo }}
    >
      <div className="min-h-screen bg-purple-300 py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg shadow-black bg-white rounded-lg px-4 py-3 text-black">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <p className=" absolute text-md bottom-3 right-3 text-white"> made with ❤️ by <span className="text-red-500">Akashh</span></p>
      </div>
    </TodoProvider>
  );
}

export default App;
