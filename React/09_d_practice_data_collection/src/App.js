import logo from './logo.svg';
import './App.css';

function App() {
  var shopping_cart =[
      { Category:"games", collection:["FarCry","CSGO","Snake&Laddders"]},
      { Category:"snacks", collection:["Popcorn","milk","sabudana"]},
  ]
  return (
    <>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
      />
      <div className="App">
        <h2>Shopping cart</h2>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Category</th>
            <th>Products</th>
          </tr>
          </thead>
            <tbody>
            {shopping_cart.map((item, index) => (
                <tr key={index}>
                    <td>{item.Category}</td>
                    <td>{item.collection.join(', ')}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </>

  );
}

export default App;
