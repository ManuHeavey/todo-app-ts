import { ToDoTitle } from "../types"
import { useState } from 'react';

interface Props {
    saveToDo: ({ title }: ToDoTitle) => void
}

export const CreateToDo: React.FC<Props> = ({ saveToDo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveToDo({ title: inputValue })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={(event) => {setInputValue(event.target.value)}}
                placeholder="¿Qué necesitas hacer?"
                autoFocus
            />
        </form>
    )
}