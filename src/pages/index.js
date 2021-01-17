import React, { useEffect, useState, Children } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Separator from 'components/Separator';
import { useTrail, a } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

function Trail({ children, itemHeight, ...props }) {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 200 },
    opacity: 1,
    x: 0,
    height: itemHeight,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div
      className='trails-main'
      {...props}
    >
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className='trails-text'
            style={{ ...rest, transform: x.interpolate((position) => `translate3d(0,${ position }px,0)`) }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

Trail.propTypes = {
  children: PropTypes.object.isRequired,
  itemHeight: PropTypes.number.isRequired,
};

const Index = () => {
  const { t } = useTranslation();
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = ['composer', 'pianist', 'conductor'];

  useEffect(() => {
    const professionsTimeout = setInterval(() => {
      const currentProfessionIndex = professionIndex === 2 ? -1 : professionIndex;
      setProfessionIndex(currentProfessionIndex + 1);
    }, 3000);

    return () => {
      clearInterval(professionsTimeout);
    };
  }, [professionIndex]);

  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.home') }`} />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ mass: 1, tension: 500, friction: 1200 }}
      >
        {(props) => (
          <div
            style={props}
            className='home-page-container'
          >
            <Trail itemHeight={170}>
              <h2 className='home-page__title'>
                <p className='home-page__title--name'>
                  Anna
                </p>
                <p className='home-page__title--surname'>
                  Rocławska-Musiałczyk
                </p>
              </h2>
            </Trail>

            <Separator />

            <div className='professions'>
              {professions.map((profession, index) => {
                if (index === professionIndex) {
                  return (
                    <Trail
                      key={profession}
                      itemHeight={30}
                    >
                      <span className='home-page__subtitle'>{t(profession)}</span>
                    </Trail>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </Spring>
    </section>
  );
};

export default Index;
