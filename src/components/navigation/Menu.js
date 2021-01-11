import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import map from 'lodash/map';
import { navigationItems } from './navigationItems';

export default function Menu({
  handleLanguageChange,
  language,
  isOpen,
}) {
  const { t } = useTranslation();

  return (
    <div className={`navbar__menu ${ isOpen ? 'navbar__menu--open' : '' }`}>
      <ul className='navbar__menu--links'>
        {map(navigationItems, (item) => (
          <li className='navbar__menu--links-item'>
            {item.location ? (
              <Link
                className='navbar__menu--links-item--link'
                to={item.location}
              >
                {t(`navigation.${ item.name }`)}
              </Link>
            )
              : (
                <p className='navbar__menu--links-item--link'>
                  {t(`navigation.${ item.name }`)}
                </p>
              )}

            {item.children && (
              <ul className='menu-item-children'>
                {map(item.children, (navChildren) => (
                  <li className='menu-item-children--item'>
                    <Link
                      className='menu-item-children--item--link'
                      to={navChildren.location}
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

      <div className='navbar__menu--language'>
        <select
          onChange={handleLanguageChange}
          value={language}
        >
          <option value='pl'>PL</option>
          <option value='en'>EN</option>
        </select>
      </div>
    </div>
  );
}

Menu.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
