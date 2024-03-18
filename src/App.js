import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './components/Home'
import BrowseMovie from './components/Browse';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Container fluid className='navbar-nav'>

        <nav>
            <Link to="/" className="navlink">Home</Link>
            <Link to="/browse" className="navlink">Browse</Link>
            <div className='search-wrapper'>
              <FaSearch style={{marginRight:'5px'}}/>
              <input  className ='search-bar' placeholder='search here'/>
            </div>
        </nav>
        
      </Container>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/browse" Component={BrowseMovie}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
