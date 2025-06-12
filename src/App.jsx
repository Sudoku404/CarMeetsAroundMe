import './App.css';
import Meets from './components/Meets';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Car Meets Around Me</h1>
        <h2>Explore Different Communities</h2>
      </div>
     
      <Meets />
    </div>
  )
}

export default App