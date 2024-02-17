
import './App.css';
import Nav from './Components/Nav';
import Movielist from './Components/Movielist';
import { MovieProvider } from './Components/Moviecontext';
import Addmovie from './Components/Addmovie'
function App() {
  return (
    <MovieProvider> 
    <div className="App">
      <Nav/>
      <Addmovie/>
      <Movielist/>
    </div>
    </MovieProvider>
  );
}

export default App;
