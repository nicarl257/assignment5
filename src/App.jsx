import { useState } from 'react'
import './App.css'

const schedule = [
  ['Express 1', 'Nairobi', 'Mombasa', '8:00 AM', '1:30 PM', 'KES 1,500'],
  ['Express 2', 'Mombasa', 'Nairobi', '8:00 AM', '1:30 PM', 'KES 1,500'],
  ['Inter-County', 'Nairobi', 'Mombasa', '3:00 PM', '9:30 PM', 'KES 700'],
  ['Commuter 1', 'Nairobi', 'Ruiru', '6:30 AM', '7:15 AM', 'KES 100'],
  ['Commuter 2', 'Nairobi', 'Kikuyu', '5:45 PM', '6:30 PM', 'KES 100'],
]

const routes = [
  ['Nairobi - Mombasa', 'Long distance line. From KES 700.'],
  ['Nairobi - Voi', 'Stop for Taita Taveta. From KES 500.'],
  ['Nairobi - Emali', 'Stop for Makueni and Kajiado. From KES 300.'],
  ['Nairobi - Ruiru', 'Daily commuter trip. From KES 100.'],
  ['Nairobi - Kikuyu', 'Daily commuter trip. From KES 100.'],
  ['Nairobi - Athi River', 'Daily commuter trip. From KES 100.'],
]

const services = [
  'Passenger train travel',
  'Online ticket booking',
  'Train schedules and fares',
  'Commuter train services',
  'Luggage assistance',
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80',
    alt: 'Train tracks running through the countryside',
  },
  {
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=700&q=80',
    alt: 'Passenger train at a station',
  },
  {
    src: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=700&q=80',
    alt: 'Railway platform and train',
  },
  {
    src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=700&q=80',
    alt: 'Public transport ready for a journey',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80',
    alt: 'Mountain landscape along a railway journey',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
    alt: 'Open landscape seen on a trip',
  },
]

function Button({ children, href, type = 'button' }) {
  if (href) {
    return <a className="button" href={href}>{children}</a>
  }

  return <button className="button" type={type}>{children}</button>
}

function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#schedule">Schedule</a>
      <a href="#routes">Routes</a>
      <a href="#services">Services</a>
      <a href="#register">Register</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

function Header({ name, tagline }) {
  return (
    <>
      <header className="site-header" id="home">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </header>
      <Navigation />
    </>
  )
}

function Footer({ name }) {
  return (
    <footer className="site-footer">
      <p>© {name}</p>
      <a href="#home">Back to top</a>
    </footer>
  )
}

function App() {
  const [registrationMessage, setRegistrationMessage] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  function submitRegistration(event) {
    event.preventDefault()
    setRegistrationMessage('Registration submitted. Thank you!')
    event.currentTarget.reset()
  }

  function submitContact(event) {
    event.preventDefault()
    setContactMessage('Message sent. Thank you for contacting us.')
    event.currentTarget.reset()
  }

  return (
    <>
      <Header name="Kenya Railways" tagline="Train schedules, routes and fares" />
      <main>
        <section className="welcome section" id="about">
          <h2>Welcome</h2>
          <p>
            Check train times, see the fare for your trip and find the route you need.
            Please arrive at the station 90 minutes before your train leaves.
          </p>
          <img
            className="home-image"
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
          />
          <h2>About Us</h2>
          <p>
            Kenya Railways connects people and communities through safe and reliable
            passenger train services.
          </p>
        </section>

        <section className="section" id="schedule">
          <h2>Train Schedule</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Train</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departs</th>
                  <th>Arrives</th>
                  <th>Fare</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((train) => (
                  <tr key={train[0]}>
                    {train.map((item) => <td key={item}>{item}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="routes">
          <h2>Routes</h2>
          <div className="card-list">
            {routes.map(([name, description]) => (
              <article className="simple-card" key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <h2>Services</h2>
          <ul className="service-list">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </section>

        <section className="section" id="register">
          <h2>Passenger Registration</h2>
          <p>Fill in the form to register your travel details.</p>
          <form className="simple-form" onSubmit={submitRegistration}>
            <label htmlFor="passenger-name">Full name</label>
            <input id="passenger-name" name="name" type="text" required />
            <label htmlFor="passenger-email">Email address</label>
            <input id="passenger-email" name="email" type="email" required />
            <label htmlFor="passenger-phone">Phone number</label>
            <input id="passenger-phone" name="phone" type="tel" required />
            <label htmlFor="passenger-route">Preferred route</label>
            <select id="passenger-route" name="route" defaultValue="" required>
              <option value="" disabled>Select a route</option>
              {routes.map(([name]) => <option key={name}>{name}</option>)}
            </select>
            <Button type="submit">Submit</Button>
            {registrationMessage && <p className="message" role="status">{registrationMessage}</p>}
          </form>
        </section>

        <section className="section" id="gallery">
          <h2>Gallery</h2>
          <div className="gallery">
            {galleryImages.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <h2>Contact Us</h2>
            <p>Email: info@krc.co.ke</p>
            <p>Phone: +254 719736511</p>
            <p>Address: Railway Headquarters, Haile Selassie Avenue, Nairobi</p>
          </div>
          <form className="simple-form" onSubmit={submitContact}>
            <h3>Send us a message</h3>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" required />
            <label htmlFor="contact-note">Message</label>
            <textarea id="contact-note" name="message" rows="4" required />
            <Button type="submit">Send message</Button>
            {contactMessage && <p className="message" role="status">{contactMessage}</p>}
          </form>
        </section>
      </main>
      <Footer name="Kenya Railways" />
    </>
  )
}

export default App
