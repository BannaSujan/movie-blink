import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './components/Home'
import BrowseMovie from './components/Browse';
import Search from './components/Search'
import SearchBar from './components/SearchBar';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
      <div>
      <Container fluid className='navbar-nav'>

        <nav>
            <Link to="/" className="navlink">Home</Link>
            <Link to="/browse" className="navlink">Discover</Link>
            <SearchBar/>
        </nav>
        
      </Container>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/browse" Component={BrowseMovie}/>
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
