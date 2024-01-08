import { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

import BagIcon from "../img/bag.png";
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { totalCount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-white shadow-md py-3' : 'bg-none py-2' } fixed z-10 w-full transition-all`} >
      <div className='container flex mx-auto justify-between items-center h-full'>
        <Link to={'/'}>
          <div >
            <img className='w-[40px]' src={logo} alt='logo' />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
           <img className='w-[40px]' src={BagIcon} alt='Bag icon' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] text-white w-[18px] h-[18px] flex justify-center items-center rounded-full'>{totalCount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
