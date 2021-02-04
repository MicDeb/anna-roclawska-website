import facebook from 'src/img/social/facebook.svg';
import instagram from 'src/img/social/instagram.svg';
import youtube from 'src/img/social/youtube.svg';
import spotify from 'src/img/social/spotify.svg';

export const navigationItems = Object.freeze([
  { location: '/', name: 'home' },
  { location: '/bio', name: 'bio' },
  {
    location: null,
    name: 'compositions',
    children: [
      {
        location: '/compositions/symphonic-and-orchestor-music',
        name: 'symphonic_and_orchestor_music',
      },
      {
        location: '/compositions/chamber-music',
        name: 'chamber_music',
      },
      {
        location: '/compositions/solo-music',
        name: 'solo_music',
      },
      {
        location: '/compositions/choral-music',
        name: 'choral_music',
      },
      {
        location: '/compositions/choral-music-for-children',
        name: 'choral_music_for_children',
      },
      {
        location: '/compositions/arrangements',
        name: 'arrangements',
      },
      {
        location: '/compositions/theater-music-and-song',
        name: 'theater_music_and_song',
      },
    ],
  },
  {
    location: null,
    name: 'chamber_music_activity',
    children: [
      {
        location: '/chamber-music/classical-music',
        name: 'classical_music',
      },
      {
        location: '/chamber-music/actors-and-artistic-song',
        name: 'actors_and_artistic_song',
      },
      {
        location: '/chamber-music/tapering',
        name: 'tapering',
      },
    ],
  },
  { location: '/art-n-voices', name: 'art_n_voices' },
  { location: '/cds', name: 'cds' },
  { location: '/gallery', name: 'gallery' },
  { location: '/contact', name: 'contact' },
]);

export const socialNavigationItems = Object.freeze([
  {
    location: 'https://www.facebook.com/Anna-Roc%C5%82awska-Musia%C5%82czyk_composer-103422315059712',
    name: 'facebook',
    icon: facebook,
    alt: 'Facebook icon',
  },
  {
    location: 'https://www.instagram.com/anna_composer/',
    name: 'instagram',
    icon: instagram,
    alt: 'Instagram icon',
  },
  {
    location: 'https://open.spotify.com/artist/7aTSnGenGlNoRrRzXgTbSe',
    name: 'spotify',
    icon: spotify,
    alt: 'Spotify icon',
  },
  {
    location: 'https://www.youtube.com/channel/UCCjbzKxJH0s47mqzX3Bb19Q',
    name: 'youtube',
    icon: youtube,
    alt: 'Youtube icon',
  },
]);
