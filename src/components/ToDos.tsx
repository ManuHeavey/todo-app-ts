import { ToDoId, type ListOfToDos, type ToDo as ToDoType } from "../types";
import { ToDo } from "./ToDo";

interface Props {
  toDos: ListOfToDos
  onRemoveToDo: ({id}: ToDoId) => void
  onToggleCompletedToDo: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void
}

export const ToDos: React.FC<Props> = ({ toDos, onRemoveToDo, onToggleCompletedToDo }) => {
  return (
    <ul className="todo-list">
      {toDos.map((toDo) => (
        <li 
          key={toDo.id} 
          className={`${toDo.completed ? "completed" : ""}`}
        >
          <ToDo 
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
            onRemoveToDo={onRemoveToDo}
            onToggleCompleteToDo={onToggleCompletedToDo}
          />
        </li>
      ))}
    </ul>
  );
};
