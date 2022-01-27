import React from "react";

const Editor = (props) => {
  return (
    <div>
      <textarea
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.text}
      />
    </div>
  );
};

export default Editor;
