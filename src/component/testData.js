import React, {useEffect, useState} from "react";
import data from '../data/data.json';

const DataDisplay = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() =>{
        setPosts(data.posts);
        setComments(data.comments);
        setProfile(data.profile);
    }, []);

    return(
        <div>
            <h1>{profile.name} 's Blog</h1>
            <h2>Posts</h2>
            <ul>
                {posts.map(post =>(
                    <li key ={post.id}>
                        {post.title} - {post.views} views
                    </li>   
                ))}
            </ul>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment =>(
                    <li key ={comment.id}>
                      Comment on post {comment.postID}: {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default DataDisplay;