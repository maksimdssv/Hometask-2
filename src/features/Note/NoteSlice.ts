import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import DUMMY_NOTES, {Note} from "../../lib/dummy-notes";
import {RootState} from "../../app/store";
import {getCurrDate} from "../../lib/helpers";

interface NotesState {
    notesArr: Note[],
    newId: number
}

interface NoteInput {
    name: string,
    category: string,
    content: string,
    id?: string
}


const initialState: NotesState = {
    notesArr: DUMMY_NOTES,
    newId: DUMMY_NOTES.length + 1
}

export const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<NoteInput>) {
            const newNote: Note = {
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content,
                creationDate: getCurrDate(),
                isArchived: false,
                id: "q" + ++state.newId
            }
            state.notesArr.push(newNote);
        },
        removeNote(state, action: PayloadAction<{ id: string }>) {
            state.notesArr = state.notesArr.filter((note) => note.id !== action.payload.id);
        },
        archiveNote(state, action: PayloadAction<{ id: string }>) {
            const foundIndex = state.notesArr.findIndex((note) => note.id === action.payload.id);
            state.notesArr[foundIndex].isArchived = !state.notesArr[foundIndex].isArchived;
        },
        editNote(state, action: PayloadAction<NoteInput>) {
            const foundIndex = state.notesArr.findIndex((note) => note.id === action.payload.id);
            state.notesArr[foundIndex] = {
                ...state.notesArr[foundIndex],
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content
            }
        }
    }
})

export const {addNote, removeNote, archiveNote, editNote} = noteSlice.actions;

export const selectArchivedNotesIds = (state: RootState) => {
    return state.notes.notesArr.filter((note) => note.isArchived === true).map(note => note.id)
};

export const getTotalAmount = (state: RootState) => {
    const result: { [key: string]: { active: number, archived: number } } = {};
    state.notes.notesArr.forEach((note) => {
        const category = note.category;
        if (result[category] === undefined) {
            result[category] = {
                active: 0,
                archived: 0
            };
        }
        const currState = note.isArchived ? "archived" : "active";
        result[category][currState] += 1;
    });
    return result;
}

export const makeSelectNoteById = () => createSelector(
    (state: RootState) => state.notes.notesArr,
    (_: any, itemId: string) => itemId,
    (notes, noteId) => notes.filter((note) => note.id === noteId))

export const selectNotesIds = (state: RootState) => state.notes.notesArr.filter((note) => note.isArchived === false).map((note) => note.id);

export default noteSlice.reducer;