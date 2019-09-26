import React from 'react';
import SeachBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : '',
            inStock : false
        }
        this.handleXFilterTextChange = this.handleXFilterTextChange.bind(this);
        this.handleXInStockChange = this.handleXInStockChange.bind(this);
    }
    handleXFilterTextChange = (filterText) => {
        this.setState(
            {
                filterText : filterText
            }
        );
    }
    handleXInStockChange = (inStockOnly) => {
        this.setState(
            {
                inStock : inStockOnly
            }
        );
    }
    
    render(){
        return(
            <div>
                <p>Mehedi Hasan</p>
                <SeachBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStock}
                    onFilterTextChange = {this.handleXFilterTextChange}
                    onInStockChange = {this.handleXInStockChange}
                />
                <ProductTable 
                    products = {this.props.products}
                    filterText = {this.state.filterText}
                    inStockOnly={this.state.inStock}
                />
            </div>
        );
    }
}
export default FilterableProductTable;