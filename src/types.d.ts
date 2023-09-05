import { TODO_FILTERS } from "./constantes"


export interface ToDo  {
    id: string
    title: string
    completed: boolean
}

export type ToDoId = Pick<ToDo, 'id'>
export type ToDoTitle = Pick<ToDo, 'title'>
export type ToDoCompleted = Pick<ToDo, 'completed'>

export type ListOfToDos = ToDo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]