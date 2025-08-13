import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
        id: 1,
        todo : "todoMsg",
        checked : false,
        }
    ],
    addTodo: (todo) =>{},
    editTodo : (todo , id) =>{},
    deleteTodo :(id)=>{},
    isChecked :(id) =>{},
});

export const useTodo =()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;