import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BackIcon from "../img/back.png";
import TrashIcon from "../img/trash.svg"
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, totalCount } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : 'right-[-100%]'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-2 border-b'>
        <div className='uppercase font-semibold text-sm'>Shopping Bag ({totalCount})</div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <img  src={BackIcon}
              alt="Back Icon"
            />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className='cursor-pointer py-2 bg-yellow-400 flex items-center justify-center text-white w-10 h-10 text-xl'>
            <img  src={TrashIcon}
              alt=""
            />
          </div>
        </div>
        <Link to={'/'} className='bg-red-500 flex justify-center font-medium w-full p-4 rounded-md'>View Cart</Link>
        <Link to={'/'} className='bg-primary text-white flex justify-center font-medium w-full p-4 rounded-md'>Checkout</Link>
      </div>
    </div>
  )
};

export default Sidebar;
