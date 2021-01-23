import React from 'react';
import { socialNavigationItems } from './navigationItems';

export default function SocialNavigation() {
  return (
    <div className='social-navigation'>
      {socialNavigationItems.map((socialItem) => (
        <a
          key={socialItem.name}
          href={socialItem.location}
          target='_blank'
          rel='noreferrer'
          className='social-navigation__link'
        >
          <img
            src={socialItem.icon}
            alt={socialItem.alt}
          />
        </a>
      ))}
    </div>
  );
}
