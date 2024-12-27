import React from 'react';
import { supremeTitles, supremeDescriptions, supremeExplanations } from './data';

const TodayMath: React.FC = () => {
    const today = new Date();
    const day = today.getDate() - 1; // Convert to 0-based index

    return (
        <div className="container">
            <h1 className="title">{day}: {supremeTitles[day]}</h1>
            <p className="description"><strong>{supremeDescriptions[day]}</strong></p>
            <p className="explanation">{supremeExplanations[day]}</p>
        </div>
    );
};

export default TodayMath;

