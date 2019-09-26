import React from 'react';
import ProductCatagoryRow from './ProductCatagoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component{
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCatagory = null ;

        this.props.products.forEach(
            (product) => {
                if (product.name.indexOf(filterText) === -1) {
                    return;
                }
                if (inStockOnly && !product.stocked) {
                    return;
                }
                if ( product.catagory !== lastCatagory ){
                    rows.push(
                        <ProductCatagoryRow 
                            catagory = {product.catagory}
                            key = {product.catagory}
                        />
                    );
                }
                rows.push(
                    <ProductRow
                        product = {product}
                        key = {product.name}
                    />
                );
                lastCatagory = product.catagory;
            }
        );

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <tbody>
                        {rows}
                    </tbody>
                </thead>
            </table>
        );
    }
}
export default ProductTable;