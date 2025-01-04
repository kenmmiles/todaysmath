import React from 'react';
import { supremeTitles } from '../data';

interface Props {
    day: number;
}

const Title: React.FC<Props> = (props) => {
    const { day } = props;

    return (
        <h2 className="title">{day}: {supremeTitles[day]}</h2>
    );
};

export default Title;