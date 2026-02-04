import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    name: '',
    phone: '',
    email: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('full-name', formData.name); 
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);


      const res = await fetch(
        'https://jmbliss.com/wp-json/mycontact/v1/send',
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      const data = await res.json();

      if (data.status === 'mail_sent') {
        setStatus('Message sent successfully');
        setFormData({
          address: '',
          city: '',
          name: '',
          phone: '',
          email: '',
        });
      } else {
        setStatus(data.message || 'Form submission failed ');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error . Please check functions.php code.');
    }
  };

  return (
    <section className='contact'>
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
                  required
                  value={formData.address}
                  onChange={handleChange}
                  style={{ padding: '0.75rem 0', fontSize: '1rem' }}
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
                  required
                  value={formData.city}
                  onChange={handleChange}
                  style={{ padding: '0.75rem 0', fontSize: '1rem' }}
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
                required
                value={formData.name}
                onChange={handleChange}
                style={{ padding: '0.75rem 0', fontSize: '1rem' }}
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
                required
                value={formData.phone}
                onChange={handleChange}
                style={{ padding: '0.75rem 0', fontSize: '1rem' }}
              />
            </div>

            {/* Email */}
            <div
              className="form-mail"
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ padding: '0.75rem 0', fontSize: '1rem' }}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'Sending...'}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                marginTop: '30px',
                backgroundColor: status === 'Sending...' ? '#888' : '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            >
              {status === 'Sending...' ? 'Sending...' : 'Submit'}
            </button>

            {/* Status Message */}
            {status && (
              <p style={{ marginTop: '10px', color: status.includes('successfully') ? 'green' : 'red' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;