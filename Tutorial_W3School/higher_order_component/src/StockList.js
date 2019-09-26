import React from 'react';
import TableRow from './TableRow';

class StockList extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     stocks : [
        //         {
        //             id : 1 ,
        //             name : 'TCS'
        //         },
        //         {
        //             id : 2 ,
        //             name : 'Infosys'
        //         }
        //     ]
        // };
    }
    tabRow(){
        // if( this.state.stocks instanceof Array ){
        //     return this.state.stocks.map( function(object , i){
        //         return <TableRow obj={object} key={i} />
        //     } )
        // }
        if( this.props.data instanceof Array ){
            return this.props.data.map( function(object , i){
                return <TableRow obj={object} key={i} />
            } )
        }
    }
    render(){
        return (
            <div className = "container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Stock Id</td>
                            <td>Stock Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default StockList;