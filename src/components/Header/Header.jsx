import { useEffect, useState, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isCourseDropdownOpenMobile, setIsCourseDropdownOpenMobile] = useState(false);

  const dropdownRef = useRef(null);

  const ourServices = [
    { name: 'All Courses', href: '/courses' },
    { name: 'Kids & Teens French Classes (Beginners/Non-beginners)', href: '/courses/kids' },
    { name: 'Focused French Courses (Beginners/Non-beginners)', href: '/courses/focus-french' },
    { name: 'TCF/TEF Exam', href: '/tcftef' },
    { name: 'Orientation Test', href: '/orientationtest' },
    { name: 'Private Tuition', href: '/private-tuition' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCourseDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 items-center">
          <Link to='/'>
            <div className="flex-shrink-0 flex items-center">
              <img className="h-28 w-auto rounded-full" src={logo} alt="Institution Logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-blue-600 px-3 py-2 text-2xl font-medium">
              Home
            </Link>

            <div className="relative">
              <button
                className="text-black group inline-flex items-center hover:text-blue-600 px-3 py-2 text-2xl font-medium"
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                aria-expanded={isCourseDropdownOpen}
              >
                Course Categories
                <FiChevronDown className="ml-2 h-4 w-4" />
              </button>

              {isCourseDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute z-20 -ml-4 mt-4 w-72 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-10 transition-all duration-300"
                >
                  <div className="divide-y divide-gray-100">
                    {ourServices.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="flex items-start gap-3 px-5 py-3 text-base text-black hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-md"
                      >
                        <div className="mt-1 text-blue-600">
                          <FiChevronDown className="w-4 h-4 rotate-270" />
                        </div>
                        <span className="text-lg">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-black hover:text-blue-600 px-3 py-2 text-2xl font-medium">
              About
            </Link>

            <Link to="/contact" className="text-black hover:text-blue-600 px-3 py-2 text-2xl font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsCourseDropdownOpenMobile(false); // close dropdown on toggle
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsCourseDropdownOpenMobile(!isCourseDropdownOpenMobile)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  aria-expanded={isCourseDropdownOpenMobile}
                  aria-controls="mobile-course-menu"
                >
                  <span className="flex items-center justify-between">
                    Course Categories
                    <FiChevronDown className={`h-4 w-4 transform ${isCourseDropdownOpenMobile ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {isCourseDropdownOpenMobile && (
                  <div className="pl-4">
                    {ourServices.map((category) => (
                      <Link
                        to={category.href}
                        key={category.name}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to='/about' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                About
              </Link>

              <Link to='/contact' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
