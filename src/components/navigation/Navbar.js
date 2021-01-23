import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// import Logo from 'src/components/Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';
import SocialNavigation from './SocialNavigation';

export default function Navbar({ location }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = useState('pl');

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  const toggleHamburger = () => {
    setIsOpen((prevActive) => !prevActive);
  };

  return (
    <>
      <div className='navigation'>
        <nav
          className='navbar'
          role='navigation'
          aria-label='main-navigation'
        >
          {/* <Logo /> */}
          <SocialNavigation />
          <Hamburger
            isOpen={isOpen}
            setOpen={toggleHamburger}
          />
        </nav>
      </div>
      <Menu
        language={language}
        handleLanguageChange={handleLanguageChange}
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
        location={location}
      />
    </>
  );
}

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
};
