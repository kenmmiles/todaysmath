import React from 'react';
import Title from './Title';
import TodayMath from './TodayMath';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <Title />
            <TodayMath />
        </div>
    );
};

export default App;
