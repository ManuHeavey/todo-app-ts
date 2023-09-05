import { ToDoId, type ToDo as TodoType, type ToDo as ToDoType } from "../types"

interface Props extends TodoType {
    onRemoveToDo: ({id}: ToDoId) => void
    onToggleCompleteToDo: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void}

export const ToDo: React.FC<Props> = ({ id, title, completed, onRemoveToDo, onToggleCompleteToDo }) => {
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteToDo({ 
            id, 
            completed: event.target.checked 
        })
    }

    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={()=> {
                    onRemoveToDo({id})
                }}
            />
        </div>
    )
}