import React from 'react';

const posts = [
    {title: 'Post One', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda\n' +
            '                        consequatur consequuntur debitis dicta dolore, ea, eaque eius expedita incidunt, laborum magni\n' +
            '                        necessitatibus nemo quasi rerum soluta temporibus unde?'},

    {title: 'Post Two', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda\n' +
            '                        consequatur consequuntur debitis dicta dolore, ea, eaque eius expedita incidunt, laborum magni\n' +
            '                        necessitatibus nemo quasi rerum soluta temporibus unde?'},

    {title: 'Post Three', image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda\n' +
            '                        consequatur consequuntur debitis dicta dolore, ea, eaque eius expedita incidunt, laborum magni\n' +
            '                        necessitatibus nemo quasi rerum soluta temporibus unde?'},


];

const Main = () => {
    return (
        <main className="container">
            <article className="featured">
                <img
                    src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Image"/>
                <div className="content">
                    <h1>Post One</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda
                        consequatur consequuntur debitis dicta dolore, ea, eaque eius expedita incidunt, laborum magni
                        necessitatibus nemo quasi rerum soluta temporibus unde?</p>
                    <button className="read-more btn btn-primary">Getting started &#8594;</button>
                </div>
            </article>

            {posts.map((post) => (
                <article>
                    <img
                        src={post.image}
                        alt="Image"/>
                    <div className="content">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button className="read-more btn btn-primary">Read More &#8594;</button>
                    </div>
                </article>
            ))}
        </main>
    );
};

export default Main;