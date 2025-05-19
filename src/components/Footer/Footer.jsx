import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<div className="">
    <footer className="bg-blue-950 text-gray-300  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              className="h-28 w-auto"
              src={logo}
              alt="Institution Logo"
            />
                        <h3 className="text-lg font-semibold text-red-500 m-0">Séjour Française</h3>

            <p className="text-gray-400 ">
              …Your Path to Mastering French
            </p>
          </div>

          {/* Quick Links */}


<div className="space-y-4">
  <h4 className="text-lg font-medium text-white">Navigation</h4>
  <ul className="space-y-2">
    <li>
      <Link
        to="/"
        className="text-gray-300 hover:text-white transition-colors"
      >
        Welcome
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="text-gray-300 hover:text-white transition-colors"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="text-gray-300 hover:text-white transition-colors"
      >
        Contact Us
      </Link>
    </li>
  </ul>
</div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@séjourfrançaise.com</li>
              <li>Tél: +91 9818806788</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Follow us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Séjour Française. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
