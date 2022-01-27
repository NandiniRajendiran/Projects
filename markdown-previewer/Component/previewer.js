import React from "react";
import { marked } from "marked";

const Preview = (props) => {
  const markdown = marked(props.text);
  marked.setOptions({
    breaks: true
  });

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};

export default Preview;
