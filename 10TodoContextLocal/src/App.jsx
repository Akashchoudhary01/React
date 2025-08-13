import { useState , useEffect } from "react";
import { TodoProvider } from "./context/index.js";

function App() {
const [todos , setTodos] = useState([])

const addTodo =(todo)=>{
  setTodos((prev) => [{id : Date.now() , ...todo, ...prev}])

}

const editTodo = (id , todo)=>{
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ?  todo: prevTodo));
}

const deleteTodo = (id)=>{
  setTodos((prev)=> prev.filter((todo) => todo.id !== id))
}

const isChecked = (id) =>{
  setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , checked : !prevTodo.checked }:prevTodo))
}

useEffect(()=>{
  JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length >0 ){
    setTodos(todos);
  }
}, []);

useEffect(()=>{
  localStorage.setItem("todos" , JSON.stringify(todos))

}, [todos])



  return (
    <TodoProvider value={{todos , addTodo , isChecked , deleteTodo , editTodo}}>

    <div className="min-h-screen bg-purple-300 py-8">
      <div className="w-full max-w-2xl mx-auto shadow-lg shadow-black bg-white rounded-lg px-4 py-3 text-black">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>

        <div className="mb-4">
          {/* Todo form goes here */}
        </div>

        <div className="flex flex-wrap gap-y-3">
          {/* Loop and add TodoItem here */}
        </div>``
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
