import { createSlice } from "@reduxjs/toolkit";

export const LibrarySlice = createSlice({
  name: "library",
  initialState: [
    { id: 1, name: "Snare 1", uri: "snare1.wav", type: "default"},
    { id: 2, name: "Snare 2", uri: "snare2.wav", type: "default"},
    { id: 3, name: "Snare 3", uri: "snare3.wav", type: "default"},
    { id: 4, name: "Snare 808", uri: "snare-808.wav", type: "default"},
    { id: 5, name: "Kick 1", uri: "kick1.wav", type: "default"},
    { id: 6, name: "Kick 808", uri: "kick-808.wav", type: "default"},
    { id: 7, name: "Kick 3", uri: "kick3.wav", type: "default"},
    { id: 8, name: "Kick 4", uri: "kick4.wav", type: "default"},
    { id: 9, name: "Cymbal 1",uri: "cymbals1.wav", type: "default"},
    { id: 10, name: "Cymbal 2",uri: "cymbals2.wav", type: "default"},
    { id: 11, name: "Hi-Hat 1", uri: "hihat1.wav", type: "default"},
    { id: 12, name: "Hi-Hat 808", uri: "hihat-808.wav", type: "default"},
    { id: 13, name: "Clap 1",uri: "clap1.wav", type: "default"},
    { id: 14, name: "Clap 808", uri: "clap-808.wav", type: "default"},
    { id: 15, name: "Openhat 808", uri: "openhat-808.wav", type: "default"},
    { id: 16, name: "Synth 1",uri: "synth1.wav", type: "default"},
  ],
  reducers: {
    addLibrary: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          name: action.payload.name,
          uri: action.payload.uri,
          color: action.payload.color,
          type: "recording",
        },
      ];
    },
    removeLibrary: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addLibrary, removeLibrary } = LibrarySlice.actions;
export const librarySelector = (state) => state.library;
export default LibrarySlice.reducer;
