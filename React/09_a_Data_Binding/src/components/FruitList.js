// import React from 'react';
//
// class FruitList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fruits: ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Fruit List</h1>
//                 <ul>
//                     {this.state.fruits.map((fruit, index) => (
//                         <li key={index}>{fruit}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default FruitList;

import React, { useState } from 'react';

function FruitList() {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Orange", "Mango", "Pineapple"]);

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;

