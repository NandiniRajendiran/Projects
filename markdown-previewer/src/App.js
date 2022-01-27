import React from "react";
import "./styles.css";
import Editor from "../Component/Editor";
import Preview from "../Component/previewer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3> Editor </h3>
        <Editor text={this.state.text} onChange={this.handleChange} />
        <h3> Preview </h3>
        <Preview text={this.state.text} />
      </div>
    );
  }
}

const placeholder = `# Welcome to my React markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

export default App;
