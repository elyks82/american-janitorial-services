const About = () => {

  const aboutText = 'American Janitorial Service Inc. has been service local '
  + 'communities and businesses since 2002. With well over 20+ years of experience, '
  + 'we have the knowledge and expertise to provide the best service possible. '
  + 'We are a family owned and operated business based out of the Austin/Cabot Arkansas area. '
  + 'We base our business on being professional, trustworthy, and reliable. We take pride in our work '
  + 'and live by the motto, "Making sure the work is done right the first time."';

  return (
    <>
      <div id='about-page-content-wrapper' className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 id='about-page-title'
            aria-label='About Title' 
            className='text-4xl mb-2'
            >About
        </h1>
        <div id='about-info-container' className='max-w-5xl p-4'>
          <p className='whitespace-pre-wrap text-lg text-center mb-1'>{aboutText}</p>
        </div>
        
      </div>
    </>
  );

}

export default About;