import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/userSlices';

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
});
