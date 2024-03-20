import React, { useState, useEffect } from 'react';

export default function PhotoTable() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9Bcn8SxQtGm3uq1Ex4otTJH7O5cxgDsbkch08Az7")
      .then(response => response.json())
      .then(data => setPhotos(data.photos))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      <tbody>
        {photos.map((photo) => (
          <tr key={photo.id}>
            <td>{photo.id}</td>
            <td>{photo.camera.full_name}</td>
            <td>{photo.rover.name}</td>
            <td>
              <img src={photo.img_src} width="100" height="100" alt="Mars" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
