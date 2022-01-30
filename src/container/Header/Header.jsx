import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
   <div className='app__wrapper_info'>
     <SubHeading title="Chase the new flavour" />
     <h1 className='app__header-h1'> The key to fine dining</h1>
     <p className='p__opensans' style={{margin: '2rem 0'}}>A place filled with delicious cuisine all above the best in the country. We are here to serve people for more than 200 years and is unknown for our unmatchable taste</p>
     <button type='button' className='custom__button'>Explore More</button>
 </div>

 <div className='app__wrapper_img'>
  <img src = {images.welcome} alt="header img" />
 </div>
  </div>
);

export default Header;
