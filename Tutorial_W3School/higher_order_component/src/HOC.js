import React , {Component} from 'react';
import StockList from './StockList';


//Creating Higher Order Component
export default function Hoc(HocComponent , data){
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
                data: data
            }
        }
        render(){
            return (
                <div>
                    {/* Spread Attributes {...this.props} makes passing properties easy */}
                    <HocComponent data={this.state.data} {...this.props} /> 
                </div>
            );
        }
    }
}