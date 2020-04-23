import React from 'react'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            imageRef: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        //referesh form
        event.currentTarget.reset();
    }

    render() {
        return (
            <React.Fragment>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input name="name" ref={this.nameRef} type="text" placeholder="name"></input>
                    <input name="price" ref={this.priceRef} type="text" placeholder="price"></input>
                    <select name="status" ref={this.statusRef}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea name="desc" ref={this.descRef} placeholder="desc"></textarea>
                    <input type="text" placeholder="image" name="image" ref={this.imageRef} />
                    <button type="submit">+ Add fish</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddFishForm;