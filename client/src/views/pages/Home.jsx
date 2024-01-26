import React from 'react';
import {useNavigate} from "react-router-dom";

const posts = [
    {
        title: 'Millions Of Manuscripts Are Written By You',
        image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600',
        body: 'On August 15th, an alarming email popped up in the inbox of Diana Pearl, a New York-based news editor. Someone On August 15th, an alarming email popped up in the inbox of Diana Pearl, a New York-based news editor. Someone ...'
    },


    {
        title: 'Underwater Exercise Is Used Strengthen Weak Muscles',
        image: 'https://images.pexels.com/photos/5736532/pexels-photo-5736532.jpeg?auto=compress&cs=tinysrgb&w=600',
        body: 'Difficulties from the area of planning were represented several times among the 10 most common On August 15th, an alarming email popped up in the inbox of Diana Pearl, a New York-based news editor. Someone difficulties...'
    },

    {
        title: 'The Science Behind Skin Care Products Has Come',
        image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
        body: 'Categories are time-bound. I find this prevents us from rabbit-holing on topics that could consume the On August 15th, an alarming email popped up in the inbox of Diana Pearl, a New York-based news editor. Someone entire...'
    },
    {
        title: 'The Smokey Night',
        image: 'https://images.pexels.com/photos/6546159/pexels-photo-6546159.jpeg?auto=compress&cs=tinysrgb&w=600',
        body: 'Categories are time-bound. I find this prevents us from rabbit-holing on topics that could consume the entire...'
    }
];
const Home = () => {
    const navigate = useNavigate();
    return (
        <main className="container">
            <article className="featured">
                <img
                    src="https://images.pexels.com/photos/9727539/pexels-photo-9727539.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Image"/>
                <div className="content">
                    <h3>The Professional Publishing Platform</h3>
                    <p>
                        Professional context it often happens that private or corporate clients corder a publication to
                        be made and presented with the actual content still not being ready.
                        Think of a news blog that’s filled with content hourly on the day of going live.
                    </p>
                    <button onClick={() => navigate('/post/show')} className="btn btn-primary">Getting Started</button>
                </div>
            </article>

            {posts.map((post) => (
                <article>
                    <img
                        src={post.image}
                        alt="Image"/>
                    <div className="content">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </article>
            ))}
        </main>
    );
};

export default Home;