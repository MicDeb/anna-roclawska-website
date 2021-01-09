import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import BioPagePreview from './preview-templates/BioPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import SymphonicAndOrchestorMusicPreview from './preview-templates/SymphonicAndOrchestorMusicPreview';
import ChamberMusicPreview from './preview-templates/ChamberMusicPreview';
import SoloMusicPreview from './preview-templates/SoloMusicPreview';
import ChoralMusicPreview from './preview-templates/ChoralMusicPreview';
import ChoralMusicForChildrenPreview from './preview-templates/ChoralMusicForChildrenPreview';
import ArrangementsPagePreview from './preview-templates/ArrangementsPagePreview';
import TheaterMusicAndSongsPagePreview from './preview-templates/TheaterMusicAndSongsPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('bio', BioPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('symphonic-and-orchestor-music', SymphonicAndOrchestorMusicPreview);
CMS.registerPreviewTemplate('chamber-music', ChamberMusicPreview);
CMS.registerPreviewTemplate('solo-music', SoloMusicPreview);
CMS.registerPreviewTemplate('choral-music', ChoralMusicPreview);
CMS.registerPreviewTemplate('choral-music-for-children', ChoralMusicForChildrenPreview);
CMS.registerPreviewTemplate('arrangements', ArrangementsPagePreview);
CMS.registerPreviewTemplate('theater-music-and-song', TheaterMusicAndSongsPagePreview);
