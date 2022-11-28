import React from 'react'
import {marked} from 'marked'

function BlogDetail() {
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html: marked.parse("### Hello world")}}></div>
    </div>
  )
}

export default BlogDetail