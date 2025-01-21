import { Github, Linkedin, Facebook, Whatsapp, Envelope } from 'flowbite-react-icons/solid';

function Footer() {
  return (
    // <section className='footer'>
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Footer Text */}
          <div className="col-md-6 text-center text-md-start">
            <h5>© 2025 Saha Kuljit Shantanu</h5>
            <p>Crafted with passion and React.js</p>
          </div>

          {/* Right: Social Links */}
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a
                href="https://github.com/Saha-Kuljit-Shantanu"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-light"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saha-kuljit-shantanu-081b5033b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-light"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/rohan.saha.5621149"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-light"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://wa.me/8801842352155"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-light"
              >
                <Whatsapp size={24} />
              </a>
              <a
                href="mailto:sahakuljitshantanubuet@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you"         
                className="mx-2 text-light"
              >
                <Envelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </section>
  );
}

export default Footer;
