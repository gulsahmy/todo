
const initialState = {
    todoList: [],
}

 const ADD = 'ADD'
 const DEL = 'DEL'
 const CLR = 'CLR'
 const TOGGLE = 'TOGGLE'

export const addTodo = (payload) => ({ type: ADD, payload: payload })
export const clearTodo = () => ({ type: CLR })
export const deleteTodo = (payload) => ({ type: DEL, payload})
export const toggleTodo = (payload) => ({ type: TOGGLE, payload })


export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD:
    return { 
        todoList: [
            ...state.todoList, 
            { id: new Date().getTime(), text:payload, completed: false },],
     }

     case DEL:
     return { 
       todoList: state.todoList.filter(todo => todo.id !== payload),
     }

     case TOGGLE:
     return { 
      todoList: state.todoList.map(todo => todo.id === payload ? { ...todo, completed: !todo.completed } : todo),   
     }
     case CLR:
     return initialState;

  default:
    return state;  
  }
}
