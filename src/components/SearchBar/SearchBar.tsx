import { useState } from "react"
import './searchBar.scss'
import lookinGlass from '../../icons/lookinGlass.svg'

interface searchBarProps {
    setSearchValue(e: string): void
}


const SearchBar = ({ setSearchValue }: searchBarProps) => {

    const [value, setValue] = useState<string>('')

    const handleSearch = () => {
        setSearchValue(value)
    }

    return (
        <div className='search'>
            <input
                className='search-input'
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    !e.target.value && setSearchValue('')
                }}
                onKeyDown={e => e.key === 'Enter' && setSearchValue(value)}>
            </input>
            <button className='search-button' onClick={handleSearch}>
                <img src={lookinGlass} alt='search' />
            </button>
        </div>
    )
}

export default SearchBar