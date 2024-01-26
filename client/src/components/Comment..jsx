import React from 'react';
import {useNavigate} from "react-router-dom";

const toggleComment = () => {
    const commentWrapper = document.querySelector('.comment');

}
const Comment = () => {
    const navigate = useNavigate();

    return (

        <>
            <section className="comment-wrapper">
                <div className="comment">
                    <div className="comment-author">John Doe</div>
                    <p>This is a great example!</p>
                </div>

                <div className="comment">
                    <div className="comment-author">Mark West</div>
                    <p>This is Another Comment!</p>
                </div>


                <div className="comment-form">
                    <textarea placeholder="Add your comment..."></textarea>
                    <button className="btn btn-primary">Send Comment</button>
                </div>
            </section><br/>

        </>

    );
};

export default Comment;