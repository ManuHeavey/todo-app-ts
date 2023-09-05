import { useState } from "react"
import { ToDos } from "./components/ToDos"
import { type FilterValue, type ToDoId, type ToDo as ToDoType, type ToDoTitle } from './types';
import { TODO_FILTERS } from "./constantes"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id: '1',
    title: 'ToDo 1',
    completed: false
  },
  {
    id: '2',
    title: 'ToDo 2',
    completed: false
  },
  {
    id: '3',
    title: 'ToDo 3',
    completed: false
  }
]

const App:React.FC = () => {
  const [toDos, setToDos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: ToDoId): void => {
    const newToDos = toDos.filter( toDo => toDo.id !== id )
    setToDos(newToDos)
  }

  const handleCompleted = (
    { id, completed }: Pick<ToDoType, 'id' | 'completed'>
  ): void => {
    const newToDos = toDos.map(toDo => {
      if(toDo.id === id) {
        return {
          ...toDo,
          completed
        }
      }
      return toDo
    })
    setToDos(newToDos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newToDos =toDos.filter(toDo => !toDo.completed)
    setToDos(newToDos)
  }

  const handleAddToDo = ({title}:ToDoTitle):void => {
    const newToDo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newToDos = [...toDos, newToDo]
    setToDos(newToDos)
  }

  const activeCount = toDos.filter(toDo => !toDo.completed).length
  const completedCount = toDos.length - activeCount

  const filteredToDos = toDos.filter(toDo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !toDo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return toDo.completed
    return toDo
  })

  return (
    <div className="todoapp">
      <Header onAddToDo={handleAddToDo} />
      <ToDos
        onToggleCompletedToDo={handleCompleted}
        onRemoveToDo={handleRemove}
        toDos={filteredToDos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
