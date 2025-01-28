import { useEffect, useState } from "react"

async function fetchPosts(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogPosts=await response.json()
    return blogPosts
}
const BlogPosts=()=>{
    const[loadedPosts,setLoadedPosts]=useState([])
    useEffect(()=>{
        fetchPosts().then((fetchPosts)=>setLoadedPosts(fetchPosts))
    },[])
    console.log(loadedPosts)
    return(
        <>
            <div>posts loaded</div>
            {loadedPosts.map((post)=>
                <li key={post.id}>{post.title}</li>
            )}
        </>
    )
}
export default BlogPosts