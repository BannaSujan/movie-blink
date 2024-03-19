import { FaSearch } from 'react-icons/fa';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    let navigate = useNavigate(); // useNavigate is called within a component that's rendered by Router
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleKeyDown = (event) => {
        // Check if the key pressed is 'Enter'
        if (event.key === 'Enter' && searchTerm.trim()) {
          navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
      };
  
    return (
      <div className='search-wrapper'>
        <FaSearch style={{ marginRight: '5px' }} />
        <input
          className='search-bar'
          placeholder='Search here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
