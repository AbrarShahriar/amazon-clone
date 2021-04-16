import React from 'react'
import './Header.css'
import { SearchOutlined, ShoppingBasketOutlined, MenuOpen } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from '../firebase'
import { useMediaQuery } from "@material-ui/core";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue()
    const isPhone = useMediaQuery('(max-width:800px)')

    const handleAuthentication = () => {
        if(user) {
            auth.signOut()
        }
    }

    const showName = () => {
        let name = 'Guest'
        if(user) {
            const i = user.email.indexOf('@')
            name = user.email.slice(0, i)
        }
        return name
    }

    return (
        <div className='header'>
            <Link to='/' >
                <img className={isPhone ? 'header__logo__phone' : 'header__logo'} src={isPhone ? `https://i1.wp.com/www.army-fitness.com/wp-content/uploads/2019/01/amazon_a_black_noto_email_v2016_us-main._CB277310596_.png?resize=249%2C154&ssl=1` : `https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png`} alt="logo"/>
            </Link>

            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchOutlined className='header__searchIcon' />
            </div>


            <div className="header__nav">
                {!isPhone &&
                <>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionOne">Hello {showName()}</span>
                        
                            <span className="header__optionTwo">{
                                user ? 'Sign Out' : 'Sign in'
                            }</span>
                    </div>
                </Link>

                
               <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                   <span className="header__optionTwo">& orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                   <span className="header__optionTwo">Prime</span>
                </div>
                </>
                
                }
                

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                    <ShoppingBasketOutlined className='header__basketIcon'/>
                    <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>


        </div>
    )
}

export default Header
