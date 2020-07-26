import React from 'react';

const Wish = ({description, price, link}) => {
    return (
        <tr>
            <td className="column1">{description}</td>
            <td className="column2">{price}</td>
            <td className="column3">{link}</td>
        </tr>
    );
}

export default Wish;