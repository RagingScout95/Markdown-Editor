import React from 'react';
import "./Markdown.css";
import ReactMarkdown from 'react-markdown';

const Markdown_editor = () => {
  const [MarkDown, SetMarkDown] = React.useState("Welcome to Markdown Editor");
  return (
    <div className='main-div'>
      <div className='up'>
        <div className='btn-nav'>
          <span className='yel-circle'></span>
          <span className='gre-circle'></span>
          <span className='red-circle'></span>
        </div>
      </div>
        <div className='down'>
        <textarea className='left-side' value={MarkDown} onChange={(e)=> SetMarkDown(e.target.value)}></textarea>
        <div className='right-side'>
        <ReactMarkdown>{MarkDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Markdown_editor
