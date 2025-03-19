import { createSlice } from '@reduxjs/toolkit';

const nightModeSlice = createSlice({
    name: 'nightMode',
    initialState: {
        value: false,
    },
    reducers: {
        changeNightMode: (state) => {
            state.value = !state.value;
            console.log(state.value);
        }
    }
})

export default nightModeSlice.reducer;
export const {changeNightMode} = nightModeSlice.actions;
export const selectNightMode = state => state.nightMode.value;