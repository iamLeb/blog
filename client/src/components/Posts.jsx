import React from 'react';
import "./css/posts.css";

const posts = [
    {id: 1, title: 'Post One', content: 'This is some stuff about the post...This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600', class: 'featured'},
    {id: 2, title: 'Post Two', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 3, title: 'Post Three', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 4, title: 'Post One', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 5, title: 'Post Two', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 6, title: 'Post Three', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 7, title: 'Post One', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 8, title: 'Post Two', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 9, title: 'Post Three', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 10, title: 'Post One', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 11, title: 'Post Two', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id: 12, title: 'Post Three', content: 'This is some stuff about the post... This is some stuff about the post... This is some stuff about the post...', image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600'},
];

const Posts = () => {
    return (
        <section className="postsContainer">
            {posts.map((post) => (
                <div key={post.id} className={`post ${post.class}`}>
                    <img
                        src={post.image}
                        alt=""/>
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Posts;