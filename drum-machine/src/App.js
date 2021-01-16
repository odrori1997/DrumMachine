import logo from './logo.svg';
import './App.css';
import Controller from './Components/Controller.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-primary">Hi I'm Omer, and this is my Drum Machine.</h1>
        <Controller />
      </header>
    </div>
  );
}

export default App;
