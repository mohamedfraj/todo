import React, { Component } from 'react';
import Item from './item'

const data=[
    {
        text:'React',
        isDone: true
    },{
        text: 'Redux',
        isDone: false
    }
]

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { tab: data }
    }
    componentWillReceiveProps(NextProps){
        if (NextProps.new==='') return
        this.setState({tab: this.state.tab.concat({text: NextProps.new })})
    }
    delete=(id)=>{
        this.setState({tab: this.state.tab.filter((el,i)=>id!==i)})
    }
    toggle=(id)=>{
        this.setState({tab: this.state.tab.map((el,i)=>id===i? {...el, isDone: !el.isDone}: el)})
    }

    render() { 
        return ( <div>
            {this.state.tab.map((el,i)=><Item key={i} el={el} id={i} deleteit={this.delete} toggle={this.toggle} />)}
        </div> );
    }
}
 
export default List;