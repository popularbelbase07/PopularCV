import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
class Navbar extends Component {
    render() {
        return (
            <>
            <nav className='light-blue darken-4' >
                <div className= 'container'>
                <div className= 'navbar-wrapper'>
                    <Link to ='/' className= 'brand-logo'>
                    CV
                        </Link>
                        <Link to ='/' data-target = 'side-nav' className= 'sidenav-trigger'>
                            <i className='material-icons'>menu</i>
                        </Link>
                   
                        <ul className= 'right hide-on-med-and-downY'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/skill'>
                                    <i className='fas fa-copy'></i>Skill
                                </Link>
                            </li>
                            <li>
                                <Link to='/education'>
                                    <i className='fas fa-graduation-cap'></i>Education
                                </Link>
                            </li>
                            <li>
                                <Link to='/experience'>
                                    <i className='fas fa-id-badge'></i>Experiences
                                </Link>
                            </li>
                            
                            <li>
                                <Link to='/portfolio'>
                                    <i className='fas fa-address-card'></i>Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                                  
                </div>
            </nav>

 

            <ul className=  'sidenav' id='side-nav'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i>Home
                                </Link> 
                            </li>
                            <li>
                                <Link to='/skill'>
                                    <i className='fas fa-copy'></i>Skill
                                </Link>
                            </li>
                            <li>
                                <Link to='/education'>
                                    <i className='fas fa-graduation-cap'></i>Education
                                </Link>
                            </li>
                            <li>
                                <Link to='/experience'>
                                    <i className='fas fa-id-badge'></i>Experiences
                                </Link>
                            </li>
                            
                            <li>
                                <Link to='/portfolio'>
                                    <i className='fas fa-address-card'></i>Portfolio
                                </Link>
                            </li>
                        </ul>

        </>
        );
    }
}

export default Navbar;