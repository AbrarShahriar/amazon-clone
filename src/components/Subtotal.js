import React from 'react'
import './Subtotal.css'
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()

    const calculateTotal = () => {
        let sum = 0
        basket?.map(item => {
            sum += item.price
        })
        return sum
    }

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items) : 
                <strong> ${calculateTotal()}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" />
                <span>This order contains a gift</span> 
            </small>

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
