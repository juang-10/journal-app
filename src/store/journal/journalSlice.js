import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    // active: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      console.log(state, action)
    },
    setActiveNote: (state, action) => {
      console.log(state, action)
    },
    setNotes: (state, action) => {
      console.log(state, action)
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
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteByIde,
} = journalSlice.actions;