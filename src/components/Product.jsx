import { useContext } from 'react';
import { Link } from 'react-router-dom';
import EyeIcon from "../img/visible.png";
import { CartContext } from '../contexts/CartContext';
const Product = ({ product }) => {
 
  const { id, title, image, price, category } = product;

  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className='border border-["#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='w-[160px] object-cover group-hover:scale-105 transition duration-300 ease-in-out'
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 text-white text-center p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product,id)}>
            <div className='flex justify-center items-center w-10 h-10 bg-red-500'>
              <p className='text-2xl'>+</p>
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <img src={EyeIcon}
              alt={title}
            />
          </Link>
        </div>
      </div>
      <div>
        <div>
          <div className='text-sm capitalize text-gray-600'>{category}</div>
          <Link
            to={`/product/${id}`}
          >
            <h2 className='font-semibold mb-1'>{title}</h2>
          </Link>
          <div className='font-semibold'>$ {price}</div>
        </div>
      </div>
    </div>
  )
};

export default Product;
