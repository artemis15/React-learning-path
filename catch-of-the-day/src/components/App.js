import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    }

    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes: fishes });
    }

    addSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order: order });
    }

    render() {
        return (
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagLine="Fresh Market New" />
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(key => <Fish index={key} key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                        </ul>
                    </div>
                    <Order fishes={this.state.fishes} order={this.state.order} />
                    <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes}></Inventory>
                </div>
            </React.Fragment>
        )
    }

}

export default App;