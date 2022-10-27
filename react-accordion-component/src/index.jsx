import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const items = [
  {
    title: 'HTML',
    id: 1,
    description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
  },
  {
    title: 'CSS',
    id: 2,
    description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
  },
  {
    title: 'JavaScript',
    id: 3,
    description: "What is JavaScript? JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
  }
];

root.render(<Accordion items={items}/>);
