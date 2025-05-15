import { useEffect, useState, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
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
      if (Math.abs(window.scrollY - lastScrollY) < 10) return;
      setShowHeader(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setIsCourseDropdownOpenMobile(false);
  };

  return (
    <header className={`bg-blue-950 shadow-md sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-28 lg:h-32 w-full">
            {/* logo on left, menu auto aligned to right */}


            {/* Logo aligned to left */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Institution Logo"
                className="h-16 md:h-24 w-auto rounded-full shadow-lg ring-2 ring-white"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
                Home
              </Link>

              <div className="relative">
                <button
                  className="text-white group inline-flex items-center hover:text-blue-400 px-3 py-2 text-base font-medium"
                  onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                  aria-expanded={isCourseDropdownOpen}
                  aria-haspopup="true"
                >
                  Course Categories
                  <FiChevronDown className="ml-2 h-4 w-4" />
                </button>

                {isCourseDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-20 mt-4 w-72 md:w-80 lg:w-96 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-10"
                    role="menu"
                  >
                    <div className="divide-y divide-gray-100">
                      {ourServices.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-start gap-3 px-5 py-3 text-base text-black hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-md"
                        >
                          <FiChevronRight className="w-4 h-4 mt-1 text-blue-600" />
                          <span className="text-base">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
                About
              </Link>

              <Link to="/contact" className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
                Contact Us
              </Link>

              <Link to="/about" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition">
                Get Started
              </Link>

              <Link to="/registration" className="text-white px-4 py-2 border-white border-2 rounded-md text-sm sm:text-base font-semibold hover:bg-white hover:text-blue-600 transition">
                Registration
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsCourseDropdownOpenMobile(false);
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-blue-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 sm:px-6 lg:px-8">
            <div className="space-y-1 pb-4">
              <Link to='/' onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-900">
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsCourseDropdownOpenMobile(!isCourseDropdownOpenMobile)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-900"
                  aria-expanded={isCourseDropdownOpenMobile}
                >
                  <span className="flex items-center justify-between">
                    Course Categories
                    <FiChevronDown className={`h-4 w-4 transform ${isCourseDropdownOpenMobile ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {isCourseDropdownOpenMobile && (
                  <div className="pl-4 space-y-1">
                    {ourServices.map((category) => (
                      <Link
                        to={category.href}
                        key={category.name}
                        onClick={handleMobileLinkClick}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-900"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to='/about' onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-900">
                About
              </Link>

              <Link to='/contact' onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-900">
                Contact Us
              </Link>

              <div className="flex flex-col gap-2 pt-2">
                <Link to="/about" onClick={handleMobileLinkClick} className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition">
                  Get Started
                </Link>

                <Link to="/registration" className="block text-center border-white border-2 text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-white hover:text-blue-600 transition">
                  Registration
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;