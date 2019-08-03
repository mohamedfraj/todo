import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <span onClick={()=>this.props.toggle(this.props.id)} style={{textDecoration: this.props.el.isDone? 'line-through':'none'}}>{this.props.el.text}</span>
            <button onClick={()=>this.props.deleteit(this.props.id)}>Delete</button>
        </div> );
    }
}
 
export default Item;