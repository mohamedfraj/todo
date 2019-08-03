import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleChange=(telifoun)=>{
        this.setState({value: telifoun.target.value})
    }
    handleClick=()=>{
        this.props.getit(this.state.value)
        this.setState({value:''})
    }

    render() { 
        return ( <div>
            <input type='text' onChange={this.handleChange} value={this.state.value} />
            <input type='button' value='Add' onClick={this.handleClick} />
        </div> );
    }
}
 
export default Header;