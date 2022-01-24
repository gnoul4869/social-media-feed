import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userID, setUserID] = useState('');

    const dispatch = useDispatch();

    const users = useSelector((state) => state.users);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserID(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    title,
                    content,
                })
            );

            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

    const usersOption = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <label htmlFor="postAuthor">Author:</label>
                <select name="postAuthor" id="postAuthor" value={userID} onChange={onAuthorChanged}>
                    {usersOption}
                </select>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                ></textarea>
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    );
};
