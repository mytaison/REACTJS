import React , {Component} from 'react';

class ThemeSwitcher extends Component {
    state = {
        theme : null,
        data : []
    };

    resetTheme = evt => {
        evt.preventDefault();
        this.setState( {
            theme : null
        } )
    }

    chooseTheme = (theme , evt) => {
        evt.preventDefault();
        // let newData = this.state.data.slice();
        let newData = ["apple" , "orange"];
        // newData = newData.concat(this.state.data);
        this.setState( {
            theme : theme,
            data : newData
        } );
    }
    render(){
        const { theme } = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'secondary' ;
        alert(this.state.data);
        return (
            <div className = "d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
                <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'default'}</span>
                <div className="btn-group">
                    <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' }</button>

                    <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split `} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Theme Dropdown</span>    
                    </button>

                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={ e => this.chooseTheme('Primary' , e)} > Primary</a>
                        <a className="dropdown-item" href="#" onClick={ e => this.chooseTheme('Success' , e)} > Success</a>
                        <a className="dropdown-item" href="#" onClick={ e => this.chooseTheme('Danger' , e)} > Danger</a>

                        <div className="dropdown-divider">
                        </div>

                        <a className="dropdown-item" href="#" onClick={ e => this.resetTheme(e) } > Default</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default ThemeSwitcher;

