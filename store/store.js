import {configureStore} from '@reduxjs/toolkit'
import { articleSlice } from './articleSlice/articleSlice';
import { userSlice } from './userSlice/userSlice';

export const store = configureStore({
    reducer:{
        users: userSlice.reducer,
        articles: articleSlice.reducer
    }

})