import { createSlice } from '@reduxjs/toolkit';
import fakeData from 'fakeData.json';

const initialState = fakeData.lettercards;

const lettersSlice = createSlice({
    name: 'letters',
    initialState,
    reducers: {
        addLetter: (state, action) => {
            console.log('addLetter!');
            console.log(action.payload);
            return [action.payload, ...state];
        },
        deleteLetter: (state, action) => {
            return state.filter((item) => {
                return item.id !== action.payload;
            });
        },
        editLetter: (state, action) => {
            return state.map((letter) => {
                const { id, editingText } = action.payload;
                if (letter.id === id) {
                    return { ...letter, content: editingText };
                }
                return letter;
            });
        },
    },
});

export default lettersSlice.reducer;
export const { addLetter, deleteLetter, editLetter } = lettersSlice.actions;
