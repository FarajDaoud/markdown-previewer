import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

marked.setOptions({
    breaks: true,
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: initialMarkdown,
        };
        this.updatePreviewer = this.updatePreviewer.bind(this);
    }

    updatePreviewer(event){
        this.setState({
            markdown: event.target.value,
        });
    }

    render() {
        return(
            <div id="app-wrapper">
                <textarea id="editor" onChange={this.updatePreviewer} value={this.state.markdown}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}} />
            </div>
        );
    }
}

const initialMarkdown = 
`
# Heading

## Sub-heading
### And here's some other cool stuff:
  
Code between 2 backticks: \`<div></div>\`

\`\`\`
//multi-line code:

function foo(bar) {
  if (bar === true) {
    return 'Hello World';
  }
}
\`\`\`
  
Bold Text: **Bold**
Italic Text:  _Italic_
Italic and Bold Text: **_Bold and Italic_**
Strikethrough Text: ~~Hello World~~

Link: [links](https://www.freecodecamp.com)
Block Quotes: 
> Block Quotes!

Tables:

First Name | Last Name
Faraj | Daoud
Jane | Doe

Unordered Lists: 
- Item 1
  - Item 2
     - Item 3
        - Item 4

Ordered Lists: 
1. Item 1
1. Item 2
1. Item 3
- Item 4

Embedded Images:

![Smile on the beach!](https://onehdwallpaper.com/wp-content/uploads/2016/04/Be-Happy-Images-Free-Download-624x468.jpg)
`;

ReactDOM.render(<App />, document.getElementById('root'));