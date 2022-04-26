import React, { Component } from 'react';
import Profile from './Profile';
import Skill from './Skills';
import Experience from './Experiences';
import Education from './Educations';
import Portfolio from './Portfolios';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <section>
              <div className='container'>
                  <div className='row'>
              <div className='col sl2 m4 l1'>
                        <Profile/>
             </div>
                    <div className= 'sol s12 m8 l9'>
                     <Navbar/>
                        <Skill/>
                        <Experience/>
                        <Education/>
                        <Portfolio/>
                        
                        </div>
                    </div>

                </div>    
             </section>
        );
    }
}

export default Home;