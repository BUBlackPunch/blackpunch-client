import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import { Helmet } from 'react-helmet';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import hljs from 'highlight.js/lib/highlight';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/htmlbars';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('json', json);

interface Props {
  height: number;
}

const TUIEditor = ({ height }: Props) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.css" />
      <link rel="stylesheet" href="https://uicdn.toast.com/tui-color-picker/latest/tui-color-picker.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/github.min.css" />
    </Helmet>
    <Editor plugins={[codeSyntaxHighlight.bind(hljs), colorSyntax]} height={`${height}px`} />
  </>
);

export default TUIEditor;
