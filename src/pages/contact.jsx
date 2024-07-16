const Contact = () => {

  const address = {
    line1: '118 Weathering Dr',
    line2: '',
    City: 'Austin',
    State: 'AR',
    zip: '72007'
  };

  return (
    <>
      <div id='Contact-page-content-wrapper' className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 id='contact-page-title'
            aria-label='Contact Page Title' 
            className='text-4xl text-center mb-2'
            >Contact
        </h1>
        <div id='contact-info-container' className="navigator text-center mb-2" aria-label='Corporate Office Contact Information'>
          <p>Jim (Corporate Office)</p>
          <p>Office Hours: 9am-5pm [Mon-Fri]</p>
          <div className="flex flex-row justify-center items-center">
            <span>Phone:&nbsp;</span><a className="custom-link" href="tel:+15013098390">1-(501)-309-8390</a>
          </div>
          <div className="flex justify-center items-center">
            <span>Fax:&nbsp;</span><a className="custom-link" href="tel:+15016051190">1-(501)-605-1190</a>
          </div>
        </div>

        <div id='address-info-container' className="navigator text-center">
          <p id='address-container'>Address:</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${address.line1}+${address.line2}+${address.City},+${address.State}+${address.zip}`} target="_blank" rel="noopener noreferrer">
              <p>{address.line1}<br/>{address.line2}{address.City}, {address.State} {address.zip}</p>
            </a>
        </div>

      </div>
    </>
  );

}

export default Contact;