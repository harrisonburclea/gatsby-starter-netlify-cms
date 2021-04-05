import CMS from 'netlify-cms-app'
// @ts-ignore
import uploadcare from 'netlify-cms-media-library-uploadcare'
// @ts-ignore
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget('someWidget');

CMS.registerPreviewTemplate('index', IndexPagePreview as any);
CMS.registerPreviewTemplate('about', AboutPagePreview as any);
CMS.registerPreviewTemplate('products', ProductPagePreview as any);
CMS.registerPreviewTemplate('blog', BlogPostPreview as any);
