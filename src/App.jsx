import './App.css';
import Meets from './components/Meets';
import Gallery from './components/Gallery'

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Car Meets Around Me</h1>
      </div>
      <div className="Highlights">
        <h2>Highlights from Recent Events</h2>
        <Gallery />
      </div>
      <div className="Meets">
        <h2>Explore Different Communities</h2>
        <Meets />
      </div>
    </div>
  )
}

export default App