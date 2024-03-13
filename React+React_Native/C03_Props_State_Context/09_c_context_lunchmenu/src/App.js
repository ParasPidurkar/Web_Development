import React from 'react';
import LunchMenuProvider from './LunchMenuProvider';
import ClassroomComponent from './ClassroomComponent';

const App = () => (
    <LunchMenuProvider>
      <ClassroomComponent />
    </LunchMenuProvider>
);

export default App;
