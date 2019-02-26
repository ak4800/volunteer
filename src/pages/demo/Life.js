import React from 'react'
import Child from './Child';
import './life.css'

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    handleAdd = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    handleAdd2 () {
        console.log('xxxx');
    }

    render() {
        let style = {
            padding: 200
        }
        return <div className="content">
            <p>React life info</p>
            <button onClick={this.handleAdd}>button1</button>
            <button onClick={this.handleAdd2.bind(this)}>button2</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}