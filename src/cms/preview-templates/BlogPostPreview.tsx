import React, { FunctionComponent } from 'react'
import { IDict } from '../../interfaces/dict.interface';
import { BlogPostTemplate } from '../../templates/blog-post'
import IPreviewProps from './interfaces/preview-props.interface';

const BlogPostPreview: FunctionComponent<IPreviewProps> = ({ entry, widgetFor }) => {
  const tags = entry.getIn<IDict<() => Array<string>>>(['data', 'tags']);

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
};

export default BlogPostPreview
