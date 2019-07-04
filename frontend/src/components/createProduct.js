import React, { Component } from 'react';
export default class Createproduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChangeCataegory.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: '',
            name: '',
            price: '',
            category: '',
            color: ''
        }

    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Product Description: ${this.state.description}`);
        console.log(`Product Name: ${this.state.name}`);
        console.log(`Product Price: ${this.state.price}`);
        console.log(`Product Category: ${this.state.category}`);
        console.log(`Product Color: ${this.state.color}`);

        const newProduct = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
            color: this.state.color
        };

        axios.post('http://localhost:4000/product/add', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            description: '',
            price: '',
            category: '',
            color: ''
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Products</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.color}
                            onChange={this.onChangeColor}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}