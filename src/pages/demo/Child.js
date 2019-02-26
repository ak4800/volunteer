import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            test  : 0
        }
    }

    componentWillMount() {
        console.log('componentWillMount  将要装载，在render之前调用');
    }

    componentDidMount() {
        console.log('componentDidMount，（装载完成），在render之后调用');
    }

    render() {
        return <div>
            <p>{this.props.name} </p>
            <p>{this.state.test} </p>
        </div>
    }
}