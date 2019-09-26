import React from 'react';
import ReactDOM from 'react-dom';
class ProductCatagoryRow extends React.Component{
    render() {
        const catagory = this.props.catagory;
        return (
            <tr>
                <th colSpan="2">
                    {catagory}
                </th>
            </tr>
        ) ;
    }
}
export default ProductCatagoryRow;