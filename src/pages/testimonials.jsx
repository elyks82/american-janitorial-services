import PropTypes from 'prop-types';

import baldwin_shell from '../assets/testimonials/baldwin-shell-grayscale.png';
import craig_construction from '../assets/testimonials/craig_custom_construction_grayscale.png';
import champion from '../assets/testimonials/champion_logo_white.png';

import baldwin_shell_pdf from '../assets/testimonials/baldwin&shell.pdf';
import craig_construction_pdf from '../assets/testimonials/CraigCustomConstructionLLC.pdf';
import champion_pdf from '../assets/testimonials/ChampionBuildersInc.pdf';

const Testimonial = ({ modalCallback }) => {

  return (
    <>
      <div id='testimonial-page-content-wrapper' className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 id='testimonial-page-title'
            aria-label='Testimonial Title' 
            className='text-4xl mb-2'
            >Testimonials
        </h1>
        <div className='max-w-5xl flex flex-col md:flex-row p-4 rounded-lg shadow navigator'>
          <button onClick={() => modalCallback("Baldwin & Shell", <object data={baldwin_shell_pdf} type='application/pdf' width='800px' height='600px'>PDF cannot be displayed, please load on desktop</object>)} className="focus:outline-none">
            <img src={baldwin_shell} width="256px" alt="Baldwin Shell"></img>
          </button>
          <button onClick={() => modalCallback("Craig Constructions General Contractor", <object data={craig_construction_pdf} type='application/pdf' width='800px' height='600px' >PDF cannot be displayed, please load on desktop</object>)} className="focus:outline-none">
            <img src={craig_construction} width="256px" alt="Craig Construction"></img>
          </button>
          <button onClick={() => modalCallback("Champion", <object data={champion_pdf} type='application/pdf' width='800px' height='600px'>PDF cannot be displayed, please load on desktop</object>)} className="focus:outline-none">
            <img src={champion} width="256px" alt="Champion"></img>
          </button>
        </div>
      </div>
    </>
  );
}

Testimonial.propTypes = {
  modalCallback: PropTypes.func.isRequired
};

export default Testimonial;