import React from 'react';
import ReactDOM from 'react-dom';
import ComponentA from './componentA.js';
import ComponentProps from './componentProps.js';
import './sass/index.css';


const myHeaderElement = <h1>Welcome to REACT JS</h1>
const myFirstELement = <p>Hello React!</p>;
const mySecondElement = React.createElement('h3' , {} , "Element created by without JSX");
const myExpressionElement = <div> {myFirstELement}{mySecondElement}  <h1>Mehedi Hasan</h1><p> I am a React Developer with {(100 + 50 - 10 * 5) / 100} years experience</p></div>;
const largeCodeBlockAndOneTopLevelElement = (
    <div>
        <h2>I love Chandas Font</h2>
        <p>
            It comes with Ubuntu by Default.
        </p>
    </div>
);



// Creating React Component
class Component1 extends React.Component {
    render() {
        return <h1>Component 1</h1>;
    }
}
class Component2 extends React.Component {
    render() {
        return <h1>Component 2</h1>;
    }
}
class Component3 extends React.Component {
    render() {
        return <div><p>Component 3 rendering Component 1 and 2</p><Component1 /><Component2 /></div>;
    }
}

// Printing element with multiple Elements and Components without JSX
const parentElement = React.createElement(
    'div' ,
     {} , 
    [myHeaderElement , myExpressionElement , <p><hr/>Just Beginning<hr/></p> ,largeCodeBlockAndOneTopLevelElement , <Component1 /> , <Component2 /> , <Component3 /> , <ComponentA /> ] 
);
// Printing element with multiple Elements and Components with JSX
const parentElement2 = (
    <div>
        {myHeaderElement}
        {myExpressionElement}
        <p><hr/>Just Beginning<hr/></p>
        {largeCodeBlockAndOneTopLevelElement}
        <Component1 />
        <Component2 />
        <Component3 />
        <ComponentA />
    </div>
);
// Component Properties
const parentElement3 = (
    <div>
        <ComponentProps brand="Ferrari" />
    </div>
);

// Passing Data from One Component to Another
class ComponentM extends React.Component {
    render() {
        return <h1>I own a {this.props.brand} car</h1>;
    }
}
class ComponentN extends React.Component {
    render() {
        return <div><ComponentM brand="Tesla" /></div>
    }
}

// If we pass a object instead of value
class ComponentP extends React.Component {
    render() {
        return <h1>I own a {this.props.car.brand} {this.props.car.model} car</h1>;
    }
}
class ComponentQ extends React.Component {
    render() {
        let carA = {brand: "Toyota" , model: "Corolla"};
        return <div><ComponentP car={carA} /></div>
    }
}

// Props and State in the constructor
class ComponentCons extends React.Component{
    constructor( props ){
        super ( props );
        this.state = { brand: "Ferrari" , model: "360Spider" };
    }
    render() {
        return <h2>I am a {this.state.brand} {this.state.model}. <br/> but my owner wants Ford {this.props.car}!!</h2>
    }
}

class ComponentMixed extends React.Component{
    constructor( props ){
        super ( props );
        this.state = { brand: "Ferrari" , model: "360Spider" };
    }
    changeModel = () => {
        this.setState( {brand: "Chevrolet" , model: "Corvett C6"} );
    }
    render() {
        return (
            <div>
                <h2>I am a {this.state.brand} {this.state.model}. 
                <br/> but my owner wants Ford {this.props.car}! ! </h2>
                <button type="button" onClick={this.changeModel}>Change Model</button>
            </div>
        ); 
    }
}


// React LifeCycle 
// Mounting
// use of getDerivedStateFromProps & didComponentMount
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { favicol : "red" };
    }

    // static getDerivedStateFromProps(props , state){
    //     return { favicol : props.color }
    // }

    componentDidMount(){
        setTimeout( () => {
                this.setState( { favicol : "yellow" } );
            } , 2000
        );
    }

    render() {
        return <h1>My Favourite Color is {this.state.favicol}</h1>
    }
}

// Updating
// use of shouldComponentUpdate()
class HeaderUpdate extends React.Component {
    constructor(props){
        super(props);
        this.state = { favicol : "red" };
    }
    changeColor = () => {
        this.setState( { favicol : "blue" } );
    };
    shouldComponentUpdate(){
        // return true;
        return false;
    };
    render() {
        return (
            <div>
                <h1>My Favourite Color is {this.state.favicol}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
class HeaderUpdateSnapshot extends React.Component {
    constructor(props){
        super(props);
        this.state = { favicol : "red" };
    }
    componentDidMount(){
        setTimeout( () => {
            this.setState( { favicol : "white" } );
        } , 2000);
        setTimeout( () => {
            this.setState( { favicol : "blue" } );
        } , 4000);
    }
    shouldComponentUpdate(){
        return true;
    };
    getSnapshotBeforeUpdate( prevProps , prevState ){
        document.getElementById("div1").innerHTML = "Before The Update Favourite Color was " + prevState.favicol ;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "The updated Favorite Color is " + this.state.favicol;
    }
    render() {
        return (
            <div>
                <h1>My Favourite Color is {this.state.favicol}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}
// UNMOUNT
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = { show : true };
    }
    delHeader = () => {
        this.setState( { show : false } );
    }
    render(){
        let myHeader; 
        if( this.state.show ){
            myHeader = <Child />;
        }
        return (
            <div>
                {myHeader}
                <button type="button" onClick={this.delHeader} >Hide Me! </button>
            </div>
        )
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        alert("Unmounting...");
    }
    render(){
        return <h1>Hello!</h1>
    }
}



// React Event
// "this" keyboard impact in normal function and arrow function

class Football extends React.Component{
    constructor(props){
        super(props);
        this.state = { show : true }
    }
    shootNonArrow(){
        alert(this);
    }
    shootArrow = () => {
        alert(this);
    }
    render(){
        return (
            <div>
                <button onClick = { this.shootNonArrow } > Fire Non Arrow Shot! </button>
                <br/>
                <button onClick = { this.shootArrow } > Fire Arrow Shot! </button>
            </div>
        );
    }
}

// Binding Events
class FootballBind extends React.Component{
    constructor(props){
        super(props);
        this.state = { show : true }
    }
    shootNonArrow( a , b ){
        alert( a + "\t" + b );
    }
    shootArrow = ( a , b ) => {
        // alert( a.type + "\t" + b.type );
        alert( a + "\t" + b );
    }
    render(){
        return (
            <div>
                {/* It runs on load as bind is not declared */}
                <button onClick = { this.shootNonArrow( "mehedi" , "goal") } > Fire Non Arrow Shot! </button>
                <button onClick = { this.shootNonArrow.bind( this , "goal") } > Fire Non Arrow With Bind Shot! </button>
                <br/>
                {/* without anonymous function parameter will not be passed without BIND */}
                <button onClick = { () => this.shootArrow( "mehedi" , "goal" ) } > Fire Anonymous Arrow Shot! </button>
                <button onClick = { this.shootArrow.bind( this , "goal" ) } > Fire Arrow Shot! </button>
            </div>
        );
    }
}
// Event Object 

class FootballEVObj extends React.Component{
    
    shootArrow = ( a , b ) => {
        // b represents the React event that triggered the function
        // alert( a.type + "\t" + b.type );
        alert( a + "\t" + b.type );
    }
    render(){
        return (
            <div>
                {/* with anonymous function  */}
                <button onMouseMove = { (ev) => this.shootArrow( "Hover" , ev ) } onClick = { (ev) => this.shootArrow( "mehedi" , ev ) } > Fire Anonymous Arrow Shot! </button>
                {/* without anonymous function  */}
                <button onClick = { this.shootArrow.bind( this , "goal" ) } > Fire Arrow Shot! </button>
            </div>
        );
    }
}

// React Forms
class MyForm extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            username : "Mehedi"
        };
    }
    myChangeHandler = ( event ) => {
        this.setState( { username : event.target.value } )
    }
    render(){
        return(
            <form>
                <label>Enter Username</label>
                <br></br>
                <input
                    type = "text"
                    onChange = { this.myChangeHandler }
                    placeholder = { this.state.username }
                />
                <label>
                    The input is { this.state.username }
                </label>
            </form>
        );
    }
}
// Conditional Rendering
class MyForm2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formValue : ""
        };
    }
    inputHandler = (event) => {
        this.setState( { 
            formValue : event.target.value
         } );
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        alert( "You are submitting " + this.state.formValue );
    }
    render(){
        let header = "";
        if(this.state.formValue){
            header = <h1>Hello {this.state.formValue}!</h1>;
        }
        return(
            <form onSubmit={this.formSubmitHandler}>
                {header}
                <input
                    type="text"
                    onChange = {this.inputHandler}
                >
                </input>
                <input type="submit" value = "Submit"/>
            </form>
        )
    }
}
// Multiple Fields
class MyForm3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "" ,
            age : null ,
            dob : ""
        };
    }
    inputHandler = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        this.setState( { 
            [field] : value
        } );
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        alert( "You are submitting \n" + "Name: " +this.state.name + "\nAge: " +this.state.age + "\nDate of Birth: " +this.state.dob );
    }
    render(){
        let header = "";
        if(this.state.formValue){
            header = <h1>Hello {this.state.formValue}!</h1>;
        }
        return(
            <form onSubmit={this.formSubmitHandler}>
                {header}
                <input
                    type = "text"
                    name = "name"
                    onChange = {this.inputHandler}
                >
                </input>
                <br></br>
                <input
                    type = "number"
                    name = "age"
                    onChange = {this.inputHandler}
                >
                </input>
                <br></br>
                <input
                    type = "date"
                    name = "dob"
                    onChange = {this.inputHandler}
                ></input>
                <input type="submit" value = "Submit"/>
            </form>
        )
    }
}

// Validating Form Input
class MyForm4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : "" ,
            age : null
        }
    }

    changeHandler = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        // if( fieldName == "username" && fieldValue)
        //     alert(" Name cannot be empty ");
        if( fieldName == "age" && ( fieldValue < 13 || !fieldValue) )
            alert(" You don't meet age restriction, Sorry! ");
        else{
            this.setState( {
                [fieldName] : fieldValue
            } );
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        alert(
            "Name: \t" + this.state.username + "\n" +
            "Age: \t" + this.state.age + "\n" 
        );
    }
    render () {
        return (
            <form onSubmit = {this.submitHandler}>
                <h1>Hello User</h1>
                <h2>Name</h2>
                <input
                    type = "text"
                    name = "username"
                    // value = "sdsds"
                    onChange = {this.changeHandler}
                />
                <br></br>
                <h2>Age</h2>
                <input
                    type = "number"
                    name = "age"
                    onChange = {this.changeHandler}
                />
                <input
                    type = "Submit"
                    value = "Submit"
                />
            </form>
        )
    }
}

// ReactDOM.render((parentElement), document.getElementById('root'));
// ReactDOM.render( parentElement2, document.getElementById('root'));
// ReactDOM.render( parentElement3, document.getElementById('root'));
// ReactDOM.render( <ComponentN />, document.getElementById('root'));
// ReactDOM.render( <ComponentQ />, document.getElementById('root'));
// ReactDOM.render( <div><ComponentCons car="Mustang"/></div>, document.getElementById('root'));
// ReactDOM.render( <div><ComponentMixed car="Mustang"/></div>, document.getElementById('root'));
// ReactDOM.render( <Header color="white" />, document.getElementById('root'));
// ReactDOM.render( <HeaderUpdate/>, document.getElementById('root'));
// ReactDOM.render( <HeaderUpdateSnapshot/>, document.getElementById('root'));
// ReactDOM.render( <Container/>, document.getElementById('root'));
// ReactDOM.render( <Football /> , document.getElementById('root') );
// ReactDOM.render( <FootballBind /> , document.getElementById('root') );
// ReactDOM.render( <FootballEVObj /> , document.getElementById('root') );
// ReactDOM.render( <MyForm /> , document.getElementById('root') );
// ReactDOM.render( <MyForm2 /> , document.getElementById('root') );
// ReactDOM.render( <MyForm3 /> , document.getElementById('root') );
ReactDOM.render( <MyForm4 /> , document.getElementById('root') );
