import logo from './logo.svg';
import './App.css';

import React from 'react';

const Menu = ({ onAddToOrder }) => {
  const items = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Salad', price: 7 }
  ];

  return (
      <div>
        <h2>Menu</h2>
        <ul>
          {items.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => onAddToOrder(item)}>Add to Order</button>
              </li>
          ))}
        </ul>
      </div>
  );
};

const OrderSummary = ({ order }) => {
  const totalPrice = order.reduce((acc, item) => acc + item.price, 0);

  return (
      <div>
        <h2>Order Summary</h2>
        <ul>
          {order.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
      </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { order: [] };
  }

  addToOrder = (item) => {
    this.setState(prevState => ({
      order: [...prevState.order, item]
    }));
  };

  render() {
    return (
        <div>
          <Menu onAddToOrder={this.addToOrder} />
          <OrderSummary order={this.state.order} />
        </div>
    );
  }
}

export default App;
