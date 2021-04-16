import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    const showName = () => {
        let name = 'Guest'
        if(user) {
            const i = user.email.indexOf('@')
            name = user.email.slice(0, i)
        }
        return name
    }

    return (
        <div className='checkout'>

            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

                <div>
                    <h3 className="checkout__name">Hello, {showName()}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                   
                    {basket.map((item, index) => (
                        <CheckoutProduct
                            key={`${item.id}--${index}`}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
