import { Link } from 'react-router-dom';
import WomanImg from "../img/woman_hero.png";

const Hero = () => {

  return (
    <section className='bg-hero bg-no-repeat bg-cover bg-center py-24 h-[800px]'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-2'></div>New Trend
          </div>
          <h1 className='text-6xl leading-[1.1] font-thin mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
        <div className='hidden md:block'>
          <img src={WomanImg} alt='woman img' />
        </div>
      </div>
    </section>
  )
}


export default Hero;
