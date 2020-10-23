import React from 'react';
import { Viewer } from '@toast-ui/react-editor'

interface Props {
  content: string;
}

const ContentViewer: React.FC<Props> = ({ content }: Props) => {
  return <Viewer initialValue={content}/>
}


export default ContentViewer