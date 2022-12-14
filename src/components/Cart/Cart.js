import React from 'react';
import "./Cart.css";

const Cart = ({cart, clearCart, children}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }

    let tax = parseFloat((total * .1).toFixed(2));
    let grandTotal = total + shipping + tax;

    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            {/* <div>
                <button className='clearBtn' onClick={clearCart}>Clear Cart</button>
            </div> */}
            {children}
        </div>
    );
};

export default Cart;