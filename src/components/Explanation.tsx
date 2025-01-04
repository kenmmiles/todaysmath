import React from 'react';
import { supremeExplanations } from '../data';

interface Props {
    day: number;
}

const Explanation: React.FC<Props> = (props) => {
    const { day } = props;

    return (
        <p className="explanation">{supremeExplanations[day]}</p>
    );
};

export default Explanation;