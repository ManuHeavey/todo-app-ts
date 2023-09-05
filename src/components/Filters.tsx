import { FILTERS_BUTTONS } from "../constantes"
import { FilterValue } from "../types"

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    return(
                        <li key={key}>
                            <a
                                href={href}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}
                                className={`${filterSelected === key ? 'selected' : ''}`}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}