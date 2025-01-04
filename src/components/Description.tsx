import React from 'react';
import { supremeDescriptions} from '../data';

interface Props {
    day: number;
}

const Description: React.FC<Props> = (props) => {
    const { day } = props;

    return (
        <h3 className="description">{supremeDescriptions[day]}</h3>
    );
};

export default Description;