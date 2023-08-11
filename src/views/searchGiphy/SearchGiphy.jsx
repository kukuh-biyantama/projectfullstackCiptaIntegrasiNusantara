// eslint-disable-next-line no-unused-vars
import React, { useState} from 'react';
import axios from 'axios';

function SearchGiphy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    try {
      const apiKey = 'MCSLCsMSdGb941VbMT484zaWmjHWxCW2';
      const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=30`;
      const response = await axios.get(apiUrl);
      setSearchResults(response.data.data);
      setShowResults(true); // Show search results after fetching
    } catch (error) {
      console.error('Error fetching Giphy data:', error);
    }
  };

  const renderGifGrid = () => {
    const rows = [];
    const colsPerRow = 3;

    for (let i = 0; i < searchResults.length; i += colsPerRow) {
      const rowGifs = searchResults.slice(i, i + colsPerRow);
      const row = (
        <div className="row" key={i}>
          {rowGifs.map((gif) => (
            <div className="col-md-4" key={gif.id}>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <div>
      <h2>Search Your Giphy</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {showResults && (
        <div className="gif-grid" style={{ marginTop:'20%' }}>
          {searchResults.length > 0 ? renderGifGrid() : <p>No results found.</p>}
        </div>
      )}
    </div>
  );
}

export default SearchGiphy;
