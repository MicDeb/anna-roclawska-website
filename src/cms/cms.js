import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import SymphonicAndOrchestorMusicPreview from './preview-templates/SymphonicAndOrchestorMusicPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('Symphonic and orchestor music', SymphonicAndOrchestorMusicPreview);
