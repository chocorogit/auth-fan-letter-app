import letters from 'redux/modules/letters';
import member from 'redux/modules/member';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        letters,
        member,
    },
});

export default store;
