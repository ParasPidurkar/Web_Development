import React, { useState, useEffect } from 'react';
export default function DataBindingComponent() {
    const [mars, setMars] = useState([]);
  
    useEffect(() => {
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9Bcn8SxQtGm3uq1Ex4otTJH7O5cxgDsbkch08Az7")
        .then(response => response.json())
        .then(data => {
          setMars(data.photos);
        });
    }, []); // Empty dependency array means this effect runs once on mount
  
    return (
      <div className="container">
        <ol>
          {mars.map(photo => (
            <li key={photo.id}>{photo.camera.full_name} - {photo.earth_date}</li>
          ))}
        </ol>
      </div>
    );
  }