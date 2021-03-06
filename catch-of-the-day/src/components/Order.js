import React from 'react'
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        if (fish.status !== 'available') {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} no longer available </li>
        }
        return <li key={key}>{count} lbs {fish.name}
            {formatPrice(count * fish.price)}
        </li>
    }
    render() {

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((acc, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvail = fish && fish.status === 'available';
            if (isAvail) {
                return acc + (count * fish.price);
            }
            return acc;
        }, 0);

        return (
            <React.Fragment>
                <div className="order-wrap">
                    <h2>Order</h2>
                    <ul className="order">
                        {orderIds.map(this.renderOrder)}
                    </ul>
                    <div className="total">
                        Total:
                        <strong>{formatPrice(total)}</strong>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Order;