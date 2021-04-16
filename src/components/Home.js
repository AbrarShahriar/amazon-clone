import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg" alt="banner"/>

                <div className="home__row">
                    <Product 
                        id='1'
                        title='The Lean Starter' 
                        price={29.99} 
                        image='https://th.bing.com/th/id/OIP.iiUMkD8ovUEHgUMrEMXuogHaLM?pid=ImgDet&rs=1' 
                        rating={4}
                    />

                    <Product 
                        id='2'
                        title='Multi-Use Programmable Pressure Cooker' 
                        price={79.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61XkZDJ6ilL._AC_SX679_.jpg' 
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id='3'
                        title='Car Mount Phone Holder Desk Stand Pad' 
                        price={19.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61gc90tHQcL._AC_SX679_.jpg' 
                        rating={3}
                    />
                    <Product 
                        id='4'
                        title='JLogitech MK270 Wireless Keyboard and Mouse Combo' 
                        price={98.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61v%2BtaI5jvL._AC_SX679_.jpg' 
                        rating={4}
                    />
                    <Product 
                        id='5'
                        title='JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black' 
                        price={47.12} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61d5F64UDpL._AC_SL1200_.jpg' 
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id='6'
                        title='SAMSUNG 60-inch Class Q60A Series' 
                        price={997.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
                        rating={4}
                    />
                </div>

            </div>

        </div>
        <div className="footer">
            <p className='footer__text --bg'>
            <Link to='/login' >Login or Sign Up ▶ </Link>
            </p>
            <p className='footer__text'>Created by <Link to='https://github.com/AbrarShahriar' >@AbrarShahriar</Link></p>
        </div>
        </>
    )
}

export default Home
