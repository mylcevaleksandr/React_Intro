import React from "react";
import './Count.css';

class Count extends React.Component {
    // static defaultProps = {
    //     initialCount: 33
    // };

    constructor() {
        super();
        this.state = {value: 0};
    }

    changeCount() {
        // this.setState(function (prevState) {
        //     return {count: prevState.count + 1};
        // }, () => {
        //     this.props.onCountChange(this.props.number, this.state.count);
        // });
        this.props.onCountChange(this.props.count + ((!isNaN(this.state.value)) ? parseInt(this.state.value) : 1));
        this.setState({value: 0});
    }

    changeValue(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div className="Count">
                {this.props.number === 1 && (<div>{this.props.number}</div>)}
                {this.props.number !== 1 && (<div>no number</div>)}
                {this.props.text}
                <p>Count is: {this.props.count}</p>
                <input type="text" value={this.state.value} onChange={this.changeValue.bind(this)}/>
                <button onClick={this.changeCount.bind(this)}>Click me</button>
                {this.props.children}
            </div>
        );
    }
}

export default Count;