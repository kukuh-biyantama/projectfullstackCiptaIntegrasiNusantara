// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function GifItem({ gif }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ marginTop:'10dp' }}>
        <div className="card-body">
          <img src={gif.url} className="card-img-top" alt={gif.title} width={100} height={100}/>
          <p className="card-text text-center">{gif.title}</p>
        </div>
      </div>
    </div>
  );
}

export default GifItem;
