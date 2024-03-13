import React, { useState } from 'react';
import LunchMenuContext from './LunchMenuContext';

const LunchMenuProvider = ({ children }) => {
    const [menu, setMenu] = useState('Pizza');

    // Let's say the menu can change based on some actions.
    const changeMenu = (newMenu) => setMenu(newMenu);

    return (
        <LunchMenuContext.Provider value={{ menu, changeMenu }}>
            {children}
        </LunchMenuContext.Provider>
    );
};

export default LunchMenuProvider;
