import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: initialMarkdown,
        };
        this.updatePreviewer = this.updatePreviewer.bind(this);
    }

    updatePreviewer(event){
        const markdown = event.target.value;
        console.log('markdown: ' + markdown);
        this.setState({
            markdown: markdown,
        });
    }

    render() {
        return(
            <div id="app-wrapper">
                <textarea id="editor" onChange={this.updatePreviewer} value={this.state.markdown}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.markdown, { renderer: renderer })}} />
            </div>
        );
    }
}

const initialMarkdown = 
`
# Markdown Previewer
`;

ReactDOM.render(<App />, document.getElementById('root'));