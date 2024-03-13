import React, { useContext } from 'react';
import LunchMenuContext from './LunchMenuContext';

const ClassroomComponent = () => {
    // This is like listening to the announcement in a classroom.
    const { menu, changeMenu } = useContext(LunchMenuContext);

    return (
        <div>
            <h1>Today's Lunch Menu: {menu}</h1>
            <button onClick={() => changeMenu('Spaghetti')}>Change to Spaghetti</button>
        </div>
    );
};

export default ClassroomComponent;
