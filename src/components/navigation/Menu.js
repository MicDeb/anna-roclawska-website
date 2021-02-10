import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import map from 'lodash/map';
import includes from 'lodash/includes';
import arrowIcon from 'src/img/arrow.svg';
import { navigationItems } from './navigationItems';

const initialChildMenuState = {
  compositions: false,
  chamber_music_activity: false,
};

export default function Menu({
  // handleLanguageChange,
  // language,
  isOpen,
  closeMenu,
  location,
}) {
  const { t } = useTranslation();
  const [isChildMenuOpen, setChildMenuOpen] = useState(initialChildMenuState);

  const toggleChildMenu = useCallback(() => {
    let childMenuState = initialChildMenuState;
    if (includes(location.pathname, '/compositions/')) {
      childMenuState = { ...initialChildMenuState, compositions: true };
    }
    if (includes(location.pathname, '/chamber-music/')) {
      childMenuState = { ...initialChildMenuState, chamber_music_activity: true };
    }
    setChildMenuOpen(childMenuState);
  }, [location.pathname]);

  useEffect(() => {
    toggleChildMenu();
  }, [location.pathname, toggleChildMenu]);

  return (
    <div className={`navbar__menu ${ isOpen ? 'navbar__menu--open' : '' }`}>
      <ul className='navbar__menu--links'>
        {map(navigationItems, (item) => (
          <li
            key={item.name}
            className={`navbar__menu--links-item ${ location.pathname === item.location ? 'navbar__menu--links-item--active' : '' }`}
          >
            {item.location ? (
              <Link
                className='navbar__menu--links-item--link'
                to={item.location}
                onClick={closeMenu}
              >
                {t(`navigation.${ item.name }`)}
              </Link>
            )
              : (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <p
                  className='navbar__menu--links-item--link navbar__menu--links-item--link--expanded'
                  onClick={() => setChildMenuOpen(
                    (prevState) => ({
                      ...prevState,
                      [item.name]: !prevState[item.name],
                    }),
                  )}
                >
                  {t(`navigation.${ item.name }`)}
                  <img
                    src={arrowIcon}
                    alt='Arrow icon'
                    className={`icon ${ isChildMenuOpen[item.name] ? 'icon--active' : '' }`}
                  />
                </p>
              )}

            {item.children && (
              <ul className={`menu-item-children ${ isChildMenuOpen[item.name] ? 'menu-item-children--active' : '' }`}>
                {map(item.children, (navChildren) => (
                  <li
                    key={navChildren.name}
                    className={`menu-item-children--item ${ location.pathname === navChildren.location ? 'menu-item-children--item--active' : '' }`}
                  >
                    <Link
                      className='menu-item-children--item--link'
                      to={navChildren.location}
                      onClick={closeMenu}
                    >
                      {t(`navigation.${ navChildren.name }`)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* <div className='navbar__menu--language'> */}
      {/*  <select */}
      {/*    onChange={handleLanguageChange} */}
      {/*    value={language} */}
      {/*  > */}
      {/*    <option value='pl'>PL</option> */}
      {/*    <option value='en'>EN</option> */}
      {/*  </select> */}
      {/* </div> */}
    </div>
  );
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  // handleLanguageChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  // language: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
