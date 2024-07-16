import logo from '../assets/ajs-logo-inverted.png';
import PropTypes from 'prop-types';

const Home = ({Navigator}) => {
  
  return (
    <>
      <div id='home-page-content-wrapper' className='w-full h-screen flex flex-col items-center justify-center'>
        <img id='home-page-logo' src={logo} width={'512px'} alt='AJS Logo'/>
        <h1 id='home-page-title'
            aria-label='Page Title'
            className='lg:text-4xl text-2xl'>American Janitorial Services
        </h1>
        <p className='text-xs'>Est. 2002</p>
        <p className='text-sm italic mb-2'>The Very Best in Janitorial Business</p>
        <Navigator/>
      </div>
    </>
  );
}

Home.propTypes = {
  Navigator: PropTypes.func.isRequired,
}

export default Home;