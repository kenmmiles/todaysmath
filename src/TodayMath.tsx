import React from 'react';
import { supremeTitles, supremeDescriptions, supremeExplanations } from './data';

const TodayMath: React.FC = () => {
    const today = new Date();
    const day = today.getDate() - 1; // Convert to 0-based index

    return (
        <div className="container">
            <h2 className="subtitle">{supremeTitles[day]}</h2>
            <p className="description"><strong>Short Description:</strong> {supremeDescriptions[day]}</p>
            <p className="explanation"><strong>Explanation:</strong> {supremeExplanations[day]}</p>
        </div>
    );
};

export default TodayMath;

