import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Main from './Pages/Main';
import SwitchButton from './components/SwithcButton/SwitchButton';
import './App.css';
import sun from './icons/icons8-sun-24.png'
import moon from './icons/icons8-moon-24.png'
import grid from './icons/icons8-grid-48.png'
import list from './icons/icons8-list-24.png'


const App = () => {
  const [view, setView] = useState<boolean>(true)
  const [theme, setTheme] = useState<boolean>(true)
  const [filter, setFilter] = useState<string>('')

  return (
    <div className={"App" + (theme ? ' Light' : ' Dark')}>
      <header className="App-header">
        <SwitchButton checked={theme} setChecked={setTheme} icons={[sun, moon]} />
        <SwitchButton checked={view} setChecked={setView} icons={[grid, list]} />
        <SearchBar setSearchValue={setFilter} />
      </header>
      <Main view={view} filter={filter} />
    </div>
  );
}

export default App;
