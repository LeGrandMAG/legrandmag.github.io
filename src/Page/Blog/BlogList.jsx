import React, { useState } from 'react'
import { getBlog } from '../../logic'
import {marked} from 'marked'


function BlogList() {
  const [data,setData] = useState('')
  function getPost(){
    setData(getBlog("Mboka ya bapaya", "Business"))
  }
  return (
    <div>
      <button onClick={getPost}>Call data</button>
             {data && <div dangerouslySetInnerHTML={{__html: marked.parse("### Hello world")}}></div>}
    </div>
  )
}

export default BlogList