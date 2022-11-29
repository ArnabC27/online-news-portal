import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import './header.css'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navBar ? 'navBar' : 'flex'} onClick={() => setNavBar(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/culture'>Culture</Link></li>
              <li><Link to='/politics'>Politics</Link></li>
              <li><Link to='/sports'>Sports</Link></li>
              <li><Link to='/entertainment'>Entertainment</Link></li>
              <li><Link to='/future'>Future</Link></li>
              <li><Link to='/travel'>Travel</Link></li>
              <li><Link to='/worklife'>WorkLife</Link></li>
              <li className='username'>
                {
                  isAuthenticated && <Link to='/'>Hello {user.name.slice(0, 6)}</Link>
                }
              </li>
              <li className='log'>
                {
                  !isAuthenticated ?
                    <Link className='login' onClick={() => loginWithRedirect()}>Log In</Link> :
                    <Link className='logout' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Link>
                }
              </li>
            </ul>
            <button className='barIco' onClick={() => setNavBar(!navBar)}>
              {navBar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
