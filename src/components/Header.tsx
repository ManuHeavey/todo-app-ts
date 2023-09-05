import { ToDoTitle } from "../types"
import { CreateToDo } from "./CreateToDo"

interface Props {
    onAddToDo: ({ title }: ToDoTitle ) => void
}

export const Header: React.FC<Props> = ({ onAddToDo }) => {
    return (
        <header className="header">
            <h1>
                ToDo
                <img 
                    style={{ width:'60px', height: 'auto' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/450px-Typescript_logo_2020.svg.png"
                />
            </h1>

            <CreateToDo saveToDo={onAddToDo}/>
        </header>
    )
}