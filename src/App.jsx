import Board from './components/Board';
import Menu from './components/Menu';
import {DataComponent} from './hooks/useContext.jsx'
import './assets/styles/style.css';




function App() {

  return (
    <DataComponent>
      <>
        <main className="main-container">
          <Menu />

          <Board />
        </main>
      </>
    </DataComponent>
  )
}

export default App
