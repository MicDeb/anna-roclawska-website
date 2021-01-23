import React from 'react';
import Slider from 'react-slick';

export default function Recommendations() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 10000,
    draggable: true,
    fade: true,
    pauseOnHover: true,
  };
  return (
    <div className='recommendations'>
      <Slider {...settings}>
        <div className='recommendations__box'>
          <p className='recommendations__box--description'>
            Mimo młodego wieku imponująca jest działalność i
            osiągnięcia Anny Rocławskiej-Musiałczyk.
            Współpracuję z nią od kilku lat zamawiając u niej kompozycje chóralne,
            a także je wykonując, a czasem prawykonując.
            Uważam, że jest niezwykle dojrzałym muzykiem,
            a jednocześnie osobą bardzo skromną i otwartą na współpracę
            w celu uzyskania jak najlepszego efektu artystycznego.
          </p>
          <p className='recommendations__box--author'>
            Agnieszka Franków-Żelazny
            {' '}
            <br />
            <span className='author-professions'>
              dyrygent, chórmistrz, pedagog,
              Dyrektor Chóru NFM we Wrocławiu i projektu Akademii Chóralnej
            </span>
          </p>
        </div>
        <div className='recommendations__box'>
          <p className='recommendations__box--description'>
            Kompozycje Anny Rocławskiej-Musiałczyk mają swój wyczuwalny, charakterystyczny idiom,
            odznaczają się ciekawie ujętą harmoniką i starannie przemyślaną niepozbawioną
            czasem elementów zaskoczenia. Język muzyczny kompozytorki przy całym swym profesjonalnym
            szkielecie osadzonym w muzyce najnowszej, nie traci przystępności odbioru
            nawet dla mniej osłuchanego odbiorcy.
          </p>
          <p className='recommendations__box--author'>
            Bogna Czerwińska-Szymula
            {' '}
            <br />
            <span className='author-professions'>
              Pianistka, Kierownik Katedry Kameralistyki
              Akademii Muzycznej im. Stanisława Moniuszki w Gdańsku
            </span>

          </p>
        </div>
        <div className='recommendations__box'>
          <p className='recommendations__box--description'>
            Niejednokrotnie, uczestnicząc w koncertach, podczas których prezentowano
            dorobek twórczy kompozytorki, mogłem śledzić
            ożywione reakcje publiczności na jej muzykę.
            Reakcje te skądinąd nigdy mnie nie dziwiły, bowiem kompozycje A. Rocławskiej-Musiałczyk
            są frapujące, pełne intensywnych przeżyć oraz głębokich refleksji,
            jednocześnie odznaczają się znakomitą konstrukcją. Wyrazy uznania dla tej
            twórczości płyną zresztą nie tylko ze strony melomanów, lecz także gremiów jurorskich
            licznych konkursów kompozytorskich zarówno w kraju, jak i poza jego granicami.
          </p>

          <p className='recommendations__box--author'>
            Marek Czerniewicz
            {' '}
            <br />
            <span className='author-professions'>
              kompozytor, aranżer, wykładowca Akademii Muzycznej im. Stanisława Moniuszki w Gdańsku
            </span>
          </p>
        </div>
      </Slider>
    </div>
  );
}
