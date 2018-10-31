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
# Header

## Sub-header

Link: [freecodecamp.org](https://www.freecodecamp.com)
  
Inline Code: \`<p>Hello World!</p>\`

Code Block:
\`\`\`
function foo(bar) {
  if (bar === true) {
    return 'Hello World';
  }
}
\`\`\`

List: 
1. Item 1
1. Item 2
1. Item 3

Block Quote: 
> To be or not to be?

Bold Text: **Bold**

Images:

![Smile on the beach!](https://onehdwallpaper.com/wp-content/uploads/2016/04/Be-Happy-Images-Free-Download-624x468.jpg)
`;

ReactDOM.render(<App />, document.getElementById('root'));