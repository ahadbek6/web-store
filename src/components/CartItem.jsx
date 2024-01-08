import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, image, price, quantity } = item ;
  const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt={title} />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary'>
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className='cursor-pointer text-xl'>
              <p className='text-xl'>X</p>
            </div>
          </div>
          <div className='flex items-center gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 items-center h-full border text-primary font-medium max-w-[100px]'>
              <div onClick={() => decrementQuantity(id)} className='flex-1 h-full flex justify-center text-xl items-center cursor-pointe'>
                -
              </div>
              <div className='h-full flex justify-center items-center px-2'>
                {quantity}
              </div>
              <div onClick={() => incrementQuantity(id)} className='flex-1 h-full flex justify-center text-xl items-center cursor-pointer'>
                +
              </div>
            </div>
            <div className='flex flex-1 justify-around'>
              Price ${price}
            </div>
            <div className='flex flex-1 justify-end text-primary font-semibold'>
              {`$ ${parseFloat(price * quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CartItem;
