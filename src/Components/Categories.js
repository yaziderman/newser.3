import React, { Component } from 'react';
import { withRouter , BrowserRouter } from 'react-router-dom'
import config from '../extra/config';
//import { Wave } from 'react-animated-text';
const titleize = require('titleize');

class Categories extends Component {
    constructor () {
        super();
        this.state = {
            list: [],
            animationPaused: false
        };
    }

    componentDidMount(){
        this.setState({list:config.categoriesList});
    }
    
    selectCategory =(e) =>{
        e.preventDefault();
        this.props.history.push('/'+e.target.id);
        e.stopPropagation();
    }

    // The render method contains the JSX code which will be compiled to HTML.
    render() {
        return (
            <section className="hero is-small">
                <div className="hero-body p-t-none">
                    <div className="container">
                        <h1 className="title tags">
                        <BrowserRouter>
                            {
                                this.state.list.map( (category, index) => 
                                    <span className="tag is-link is-medium" key={index} id={category} onClick={this.selectCategory}>
                                        {/*"#"+titleize(category) */}
                                        {/* <Wave 
                                            delay="3.0"
                                            paused={this.state.animationPaused} 
                                            text={"#"+titleize(category)}>
                                        </Wave> */}
                                    </span>
                                )
                            }
                        </BrowserRouter></h1>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default withRouter(Categories);