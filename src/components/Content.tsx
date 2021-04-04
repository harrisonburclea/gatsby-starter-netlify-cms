import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  content: ReactNode,
  className?: string,
}

export const HTMLContent: FunctionComponent<Props> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content as string }} />
);

const Content: FunctionComponent<Props> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content
