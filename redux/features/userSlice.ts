import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    userName : 'anonimo'
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        changeUsername : (state, action : PayloadAction<string>) => {
            state.userName = action.payload
            console.log(action.type)
        }
    }
})

export const { changeUsername } = userSlice.actions;

export default userSlice.reducer;