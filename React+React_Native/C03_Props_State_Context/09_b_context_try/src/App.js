import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedButton from './ThemedButton';

const App = () => (
    <ThemeProvider>
        <div>
            <ThemedButton />
        </div>
    </ThemeProvider>
);

export default App;
