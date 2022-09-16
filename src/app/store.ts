import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import noteReducer from '../features/Note/NoteSlice';
import formReducer from '../features/NoteForm/NoteFormSlice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    form: formReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
