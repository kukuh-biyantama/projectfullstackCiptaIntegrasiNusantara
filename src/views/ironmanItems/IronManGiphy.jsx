// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './GifList';

function IronManGiphy() {
  const [ironManGifs, setIronManGifs] = useState([]);

  useEffect(() => {
    // Define your Giphy API endpoint and API key here
    const apiKey = 'MCSLCsMSdGb941VbMT484zaWmjHWxCW2';
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=iron+man&api_key=${apiKey}&limit=10`;

    axios.get(endpoint)
      .then(response => {
        const gifs = response.data.data.map(gif => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.fixed_height.url,
        }));
        setIronManGifs(gifs);
      })
      .catch(error => {
        console.error('Error fetching GIFs:', error);
      });
  }, []);

  return (
    <div style={{ marginTop:'20%' }}>
      <h2>Iron Man Giphy</h2>
      <GifList gifs={ironManGifs} />
    </div>
  );
}

export default IronManGiphy;
