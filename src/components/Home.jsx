import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <>
            {posts.map( post => <PostCard key={post.id} post={post} />)}
        </>
    )
}
