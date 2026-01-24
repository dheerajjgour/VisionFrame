import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <footer>
      <div className="container">
        <div className="row-1" id='Contact' style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Drop me a message</h2>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '0 auto',
            }}
            onSubmit={handleSubmit}
          >
            <div
              className="address-wrapper"
              style={{
                display: 'grid',
                gridTemplateColumns: '3fr 1fr',
                gap: '50px',
              }}
            >
              <div
                className="form-address"
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
              >
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  style={{
                    padding: '0.75rem 0',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div
                className="form-city"
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
              >
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    padding: '0.75rem 0',
                    fontSize: '1rem',
                  }}
                />
              </div>
            </div>

            <div
              className="form-name"
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
            >
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                style={{
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div
              className="form-phone"
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
            >
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  padding: '0.75rem 0',
                  fontSize: '1rem',

                }}
              />
            </div>

            <div
              className="form-mail"
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                marginTop: '30px',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#1d1d1d')}
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
