import React from 'react'
import { blog } from '../../logic'
import { useEffect } from 'react'

export default function BlogPage() {

    useEffect(()=>{

        if(blog)
        {
            console.log(blog)
        }
        
    }, [])
  return (
    <div>
        <p>Welcome to the place where I document my progress in this vast Universe as a Software Developer.</p>
        <p></p>
    </div>
  )
}
