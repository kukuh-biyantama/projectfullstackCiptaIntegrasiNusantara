// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
 // eslint-disable-next-line no-undef
 const imageUrl = '/images/Giphy.png';
  return (
    <div>
      <div className="container px-4 mt-5">
        <div style={{ marginBottom:'5%' }}> <img src={imageUrl} alt="Image" width={ 300 } height={100}/></div>
        <div className="row">
          <div className="col">
            <div>
              <Link to="/ironman" className="btn btn-primary">
                Iron Man Giphy
              </Link>
            </div>
          </div>
          <div className="col">
            <div>
              <Link to="/search" className="btn btn-primary">
                Search Your Giphy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;