import React, {Component} from 'react';
import { connect } from 'react-redux';

class Product extends Component{
    constructor(){
        super()
        this.state = {
            selectedQuantity: '',
        }
    }
    
    onChange = (ev) =>{
        this.setState({[ev.target.name]: ev.target.value}, ()=>console.log(this.state))
    }

    onSave = (ev) =>{
        ev.preventDefault()
    }


    render(){
        // fake data
        const id = this.props.match.params.id;
        let product = this.props.products.filter(p => p.id === id);
        product = product[0]
        const {name, quantity, imgUrl, description, price} = product;
        //     {
        //         name: 'Ergonomic Plastic Hat', 
        //         quantity: '39', 
        //         imgUrl: 'http://lorempixel.com/640/480/abstract', 
        //         description: 'Et quidem est voluptas quis eum. Sed ut est quidem distinctio error maiores dolores amet enim. Rerum aut reprehenderit autem vel velit inventore sit. Earum ut ipsam cum quia.',
        //         price: 112.00,
        //     }
        const quantityRange = []
        const {selectedQuantity} = this.state
        for (let i = 0; i <= quantity; i++){
            quantityRange.push(i)
        }
        const {onChange, onSave} = this
        return (
            <div>
                <h1>
                    Showing individual Product
                </h1>
                <span>{`Name: ${name}, Price: ${price}`}</span>
                <br/>
                <img className = 'product-image' src={imgUrl}/>
                <br/>
                <p>{description}</p>
                <form onSubmit={onSave}>
                    <select className = 'form-control' name='selectedQuantity' value={selectedQuantity} onChange={onChange}>
                        {
                            quantityRange.map(number=>{
                                return(
                                    <option key={number} value={number}>{number}</option>
                                )
                            })
                        }
                    </select>
                    <button className='btn btn-primary' type='submit'>Add to Cart</button>
                </form>
                <img className = 'shopping-cart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKorRm0enmL_tFIgvKcNcOjb_3YkWnny-CIK0BW5F9DoGocc7DkA' onClick={()=>{this.props.history.push('/cart')}}/>
                <span className = 'shopping-item-quantity'>{this.state.selectedQuantity}</span>
            </div>
        )    
    }
}

const mapStateToProps = state => {
    return {
        products: state
    }
};

export default connect(mapStateToProps)(Product);