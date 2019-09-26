import React from 'react';
import TableRow from './TableRow.js';

class UserList extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     users: [
        //         {
        //             id: 1,
        //             name: "Kamal"
        //         },
        //         {
        //             id: 2,
        //             name: "Mehedi"
        //         }
                
        //     ]
        // }
    }

    tabRow(){
        // if( this.state.users instanceof Array ){
        //     return this.state.users.map( function (object ,i){
        //         return <TableRow obj={object} key={i} />
        //     } );
        // }
        if( this.props.data instanceof Array ){
            return this.props.data.map( function(object , i){
                return <TableRow obj={object} key={i} />
            } )
        }
    }

    render(){
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>dfdfd</td>
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
export default UserList;