import React from 'react';
// import ReactDOM from 'react-dom';

class ComponentProps extends React.Component {
    dialog = "I am a ";
    render(){
        return <h1>{this.dialog}{this.props.brand}</h1>;
    }
}
export default ComponentProps;