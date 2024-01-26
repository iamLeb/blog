import React from 'react';
import Comment from "../../components/Comment..jsx";

const Single = () => {
    return (

        <>
            <article className="container container-fluid">
                <img
                    src="https://images.pexels.com/photos/9727539/pexels-photo-9727539.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photo"/>
                <div className="content">
                    <h1>This is a demo content</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut blanditiis deserunt dicta
                        ducimus
                        labore libero qui quis quo sit. Debitis ea laboriosam molestiae placeat ratione! Assumenda quae
                        quos
                        vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut blanditiis deserunt
                        dicta
                        ducimus
                        labore libero qui quis quo sit. Debitis ea laboriosam molestiae placeat ratione! Assumenda quae
                        quos
                        vel.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut blanditiis deserunt dicta
                        ducimus
                        labore libero qui quis quo sit. Debitis ea laboriosam molestiae placeat ratione! Assumenda quae
                        quos
                        vel.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut blanditiis deserunt dicta
                        ducimus
                        labore libero qui quis quo sit. Debitis ea laboriosam molestiae placeat ratione! Assumenda quae
                        quos
                        vel.
                    </p>
                </div>
                <Comment />
            </article>
        </>
    )
        ;
};

export default Single;