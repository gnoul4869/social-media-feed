import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

export const SinglePostPage = ({ match }) => {
    const { postID } = match.params;

    const post = useSelector((state) => state.posts.find((post) => post.id === postID));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostAuthor userID={post.userID} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
                <Link to={`/edit-posts/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    );
};
