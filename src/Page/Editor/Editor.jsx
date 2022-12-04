import React, { useState, useRef } from 'react'
import './Editor.css'
import { Editor } from '@tinymce/tinymce-react';
import {TOPICS} from '../../data'
import { saveBlog, dataChange } from '../../logic';

function EditorElement() {
    
    const [title, setTitle] = useState('')
    const [topic, setTopic] = useState('')
    // A function to handle the change of the content
    function handleChange(e, setData){
        console.log(e.target.value)
        dataChange(e,setData)
    }

    const editorRef = useRef(null);
    const log = () => {
        let data = editorRef.current
    if (editorRef.current) {
        saveBlog(title, data.getContent(), topic)
        console.log(topic)
      console.log(editorRef.current.getContent());
      document.getElementById('blog-title').value=""
      
    }
    else{
        console.log("Could not post data")
    }
  };
  let TopicsList = TOPICS.map(item => <option key={TOPICS.indexOf(item)} value={item}>{item}</option>)
  return (
    <div className='editor-container'>
        <select onChange={(e)=>handleChange(e,setTopic)} defaultChecked={"Topics"} defaultValue={"Topic"} className='topic-container' name="Topic">
            {TopicsList}
        </select>
        <input id="blog-title" className="editor-title" onChange={(e)=>handleChange(e,setTitle)} placeholder='Input the title' value={title}></input>
      <Editor
        apiKey='fgc1nw7yd1b0zooe9iub5zle8puz8cgkn5ybgdcfpdur2k6j'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Mag, it's time to tell a story :)</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | code',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Publish the blog</button>
    </div>
  )
}

export default EditorElement