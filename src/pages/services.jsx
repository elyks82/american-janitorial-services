const Services = () => {

  const sites = ['Office Buildings', 'Stores', 'Shopping Centers', 
  'Dental and Medical Facilities', 'Examination Rooms', 'Fitness Centers', 'Elevators', 'Stairways', 
  'Windows', 'Churches', 'Restaurants', 'Vacant Properties', 'Etc.']

  const  services = ['Detailed Office Cleaning', 'Floor Stripping and Waxing', 'Carpet Cleaning', 'Waste Removal', 
  'Detailed Bathroom Cleaning', 'Window Washing', 'Power Washing', 'Outdoor Maintenance/Office Grounds', 
  'Move In/Move Out Cleaning', 'Restaurant Cleaning', 'Final Construction Cleaning', 'Carpet Cleaning', 'Complete Floor Maintenance and Care'];
  
  return (
    <>
      <div id='services-page-content-wrapper' className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 id='services-page-title'
            aria-label='Services Title' 
            className='text-4xl mb-4'
            >Services
        </h1>
        <p className="mb-2 text-xl">Sites We Service</p>
        <ul className="flex flex-col text-center md:flex-row md:flex-wrap justify-center gap-2 max-w-5xl">
          {sites.map((site, key) => (
            <li className='text-sm' key={key}><span className="mr-2">•</span>{site}</li>
          ))}
        </ul>
        <br className="mb-4"/>
        <p className="mb-2 text-xl">Services We Offer</p>
        <ul className="flex flex-col text-center md:flex-row md:flex-wrap justify-center gap-2 max-w-5xl mb-4">
          {services.map((service, key) => (
            <li className='text-sm' key={key}><span className="mr-2">•</span>{service}</li>
          ))}
        </ul>
        <p className="italic text-xs text-center">Insurance policies, recommendations, and references available upon request.</p>
        <div id='about-navigator' className='max-w-5xl p-4 navigator text-center'>
          <a href='#contact' rel="noopener noreferrer">
              <p>Get Quote Here</p>
          </a>
        </div>
      </div>
    </>
  );

}

export default Services;