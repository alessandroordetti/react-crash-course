
import './App.css';
import Navbar from './Navbar';


function App() {

  const title = 'Welcome to the main content page';


  return (
    <div className="App">
      <Navbar />
      <div className="content" class="text-warning d-flex justify-content-center">
        <h1>
          {title}
        </h1>
      </div>
    </div>
  );
}

export default App;
