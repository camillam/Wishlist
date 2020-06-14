import React from 'react';

const Wish = ({description, price}) => {
    return (
        <tr>
            <td className="column1">{description}</td>
            <td className="column2">{price}</td>
        </tr>
    );
}

export default Wish;