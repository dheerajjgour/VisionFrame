import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row-1" style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '2rem' }}>HAVE A QUESTION? THEN THERE IS AN ANSWER!</h4>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '0 auto',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }
            }
          >
            <div className='address-wrapper ' style={{ display:"grid", gridTemplateColumns:"3fr 1fr", gap:"50px"}}>
              <div className='form-address' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <label htmlFor='address'>Address</label>
                <input
                  id="address" type="text" style={{
                    padding: '0.75rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                  }}></input>
              </div>
              <div className='form-city' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <label htmlFor='address'>City</label>
                <input
                  id="city" type="text" style={{
                    padding: '0.75rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                  }}></input>
              </div>
            </div>
            <div className="form-name" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                style={{
                  padding: '0.75rem',
                  fontSize: '1rem',
                  borderRadius: '4px',
                }}
              />
            </div>

            <div className="form-phone" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                style={{
                  padding: '0.75rem',
                  fontSize: '1rem',

                  borderRadius: '4px',
                }}
              />
            </div>
            <div className="form-mail" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label htmlFor="mail">Email</label>
              <input
                id="Email"
                type="mail"
                style={{
                  padding: '0.75rem',
                  fontSize: '1rem',

                  borderRadius: '4px',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                marginTop:'30px',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
