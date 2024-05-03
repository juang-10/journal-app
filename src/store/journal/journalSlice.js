import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
     state.notes = action.payload;
    },
    setSaving: (state, action) => {
      console.log(state, action)
    },
    updateNote: (state, action) => {
      console.log(state, action)
    },
    deleteNoteByIde: (state, action) => {
      console.log(state, action)
    },
  },
});

// Actions creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteByIde,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;