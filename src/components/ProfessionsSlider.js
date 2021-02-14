import React, { useMemo } from 'react';
import Slider from 'react-slick';
// import { useTranslation } from 'react-i18next';

export default function ProfessionsSlider() {
  // const { t } = useTranslation();
  const professions = ['composer', 'pianist', 'conductor'];
  const settings = useMemo(() => (
    {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      draggable: true,
      fade: true,
      pauseOnHover: true,
    }
  ), []);
  return (
    <div>
      <Slider
        key='professions-slider'
        {...settings}
      >
        {professions.map((profession) => (
          <span
            key={profession}
            className=''
          >
            {profession}
          </span>
        ))}
      </Slider>
    </div>
  );
}
