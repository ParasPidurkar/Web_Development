export default function DataBindingComponent() {
  var categories = ["All", "Electronics", "Footwear"];
  return (
      <div className="container">
          <h2>Categories</h2>
          <ol>
              {categories.map((category, index) => (
                  <li key={index}>{category}</li>
              ))}
          </ol>
      </div>
  );
}
