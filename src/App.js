import './App.css';
import React from "react";
import Count from "./components/Count";

class App extends React.Component {
    constructor() {
        super();
        this.state = {count: 0, items: []};
    }

    addCount() {
        this.setState((prevState) => {
            const number = this.state.items.length > 0 ? (this.state.items[this.state.items.length - 1].number + 1) : 1;
            return {
                items: [...prevState.items, {
                    number: number,
                    text: 'hell' + number
                }]
            };
        });
    }

    onCountChangeHandler(newCountValue) {
        this.setState({count: newCountValue}, () => {
            console.log(this.state.count);
        });
        console.log(this.state.count);
    }


    render() {
        console.log(1);
        return (
            <div className="App">
                {this.state.items.map(item => (
                    <Count number={item.number} text={item.text} key={item.number}
                           onCountChange={this.onCountChangeHandler.bind(this)} count={this.state.count}>
                        <div>First</div>
                    </Count>
                ))}
                <button onClick={this.addCount.bind(this)}>add count Component</button>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            items: [
                {
                    number: 1,
                    text: 'hell 1'
                },
                {
                    number: 2,
                    text: 'hell 2'
                },
                {
                    number: 3,
                    text: 'hell 3'
                }
            ]
        });
    }
}

export default App;
