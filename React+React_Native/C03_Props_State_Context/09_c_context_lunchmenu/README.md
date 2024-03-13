
# School Lunch Menu App

This project demonstrates how to use React Context to share data across components efficiently. In our example, we mimic a school's announcement system to broadcast today's lunch menu throughout the school without direct communication with each classroom.

## Overview

The application consists of the following key parts:

- **LunchMenuContext:** Acts like the school's announcement system, broadcasting the lunch menu.
- **LunchMenuProvider:** The principal's role, deciding and providing the day's lunch menu.
- **ClassroomComponent:** Represents a classroom where the lunch menu is received and displayed.
- **App:** Sets up the overall structure, ensuring the announcement system (context) is integrated throughout the school (application).

## Project Structure

```plaintext
/ (project root)
|-- /src
    |-- App.js
    |-- LunchMenuProvider.js
    |-- LunchMenuContext.js
    |-- ClassroomComponent.js
```

### LunchMenuContext.js

This file sets up the context for broadcasting the lunch menu.

```jsx
import { createContext } from 'react';

const LunchMenuContext = createContext('Pizza');
export default LunchMenuContext;
```

### LunchMenuProvider.js

Defines the lunch menu provider, enabling menu management and context provision.

```jsx
import React, { useState } from 'react';
import LunchMenuContext from './LunchMenuContext';

const LunchMenuProvider = ({ children }) => {
  const [menu, setMenu] = useState('Pizza');
  const changeMenu = (newMenu) => setMenu(newMenu);

  return (
    <LunchMenuContext.Provider value={{ menu, changeMenu }}>
      {children}
    </LunchMenuContext.Provider>
  );
};

export default LunchMenuProvider;
```

### ClassroomComponent.js

A component that consumes the context to display and change the lunch menu.

```jsx
import React, { useContext } from 'react';
import LunchMenuContext from './LunchMenuContext';

const ClassroomComponent = () => {
  const { menu, changeMenu } = useContext(LunchMenuContext);

  return (
    <div>
      <h1>Today's Lunch Menu: {menu}</h1>
      <button onClick={() => changeMenu('Spaghetti')}>Change to Spaghetti</button>
    </div>
  );
};

export default ClassroomComponent;
```

### App.js

Integrates the LunchMenuProvider and ClassroomComponent into the app.

```jsx
import React from 'react';
import LunchMenuProvider from './LunchMenuProvider';
import ClassroomComponent from './ClassroomComponent';

const App = () => (
  <LunchMenuProvider>
    <ClassroomComponent />
  </LunchMenuProvider>
);

export default App;
```

## Usage

To use this project:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository and navigate to the project directory.
3. Install dependencies with `npm install`.
4. Run the app using `npm start`.

The app demonstrates a simple use case of React Context, allowing for efficient data sharing across components.
