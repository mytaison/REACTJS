import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableProductTable } from './components';
class App extends React.Component{
    render(){
        const PRODUCTS = [
            {catagory: 'Food' , price: '$10' , stocked: true , name: 'Burger'},
            {catagory: 'Food' , price: '$20' , stocked: false , name: 'Pizza'},
            {catagory: 'Food' , price: '$03.50' , stocked: true , name: 'Fries'},
            {catagory: 'Food' , price: '$04' , stocked: true , name: 'Onion Rings'},
            {catagory: 'Drinks' , price: '$10' , stocked: true , name: 'Coke'},
            {catagory: 'Drinks' , price: '$20' , stocked: true , name: 'Juice'},
            {catagory: 'Drinks' , price: '$7.99' , stocked: true , name: 'Beer'},
        ]
        return (
            <div>
                <span>Price Table!</span>
                <FilterableProductTable products={PRODUCTS} />
            </div>
        );
    }
}
export default App; 