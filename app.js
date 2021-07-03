import './App.css'; 
import Calculadora from './components/calculadora/calculadora';
import Listcards from './components/cards/listcards';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Listcards/> 
      <Calculadora/>
    </div>
  );
}

export default App;
