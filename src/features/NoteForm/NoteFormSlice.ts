import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const noteFormSlice = createSlice({
    name: "form",
    initialState: {formIsShown: false, detailsAreShown: false, id: "", savedIsShown: false},
    reducers: {
        showForm(state, action: PayloadAction<{ id?: string }>) {
            state.formIsShown = true;
            state.detailsAreShown = false;
            state.id = action.payload.id ?? "";
            state.savedIsShown = false;
        },
        showDetails(state, action: PayloadAction<{ id: string }>) {
            state.formIsShown = false;
            state.detailsAreShown = true;
            state.id = action.payload.id;
            state.savedIsShown = false;
        },
        hideForm(state) {
            state.formIsShown = false;
        }
    }
})


export const {showForm, showDetails, hideForm} = noteFormSlice.actions;

export default noteFormSlice.reducer;