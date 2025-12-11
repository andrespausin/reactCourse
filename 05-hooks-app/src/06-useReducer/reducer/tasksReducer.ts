import * as z from "zod/v4";

interface Todo {
  id: number;
  text: string;
  completed: boolean
}

interface TaskState {
  todos: Todo[];
  length: number;
  completedNumber: number;
  pending: number;
}

export type TaskAction =
  { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number }

const TodoScheme = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
})

const TaskStateScheme = z.object({
  todos: z.array(TodoScheme),
  length: z.number(),
  completedNumber: z.number(),
  pending: z.number()
})

export const getTasksInitialState = (): TaskState => {

  const localStorageState = localStorage.getItem('task-state')

  if (!localStorageState) {
    return {
      todos: [],
      completedNumber: 0,
      pending: 0,
      length: 0
    }
  }

  // Validar mediante Zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState))

  // Hay que hacer una validacion del objeto para evitar que pueda ser manipulado --> DONE with Zod
  if (result.error) {
    console.log(result.error)
    return {
      todos: [],
      completedNumber: 0,
      pending: 0,
      length: 0
    }
  }
  return result.data


}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1
      };
    }
    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed, }
        }
        return todo;
      })

      return {
        ...state,
        todos: updatedTodos,
        completedNumber: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length

      }
    }

    case 'DELETE_TODO': {
      const currentTodos = state.todos.filter((todo) => todo.id !== action.payload)

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completedNumber: currentTodos.filter(todo => todo.completed).length,
        pending: currentTodos.filter(todo => !todo.completed).length
      }

    }
  }
}