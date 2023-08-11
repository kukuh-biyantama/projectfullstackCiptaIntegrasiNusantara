// eslint-disable-next-line no-unused-vars
import React from 'react';
import GifItem from './GifItem';

// eslint-disable-next-line react/prop-types
function GifList({ gifs }) {
  return (
    <div className="row">
      {gifs.map(gif => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}

export default GifList;
