import { createSlice } from "@reduxjs/toolkit";
const colorsTab= [
  { id: 1, color: "#800000" },
  { id: 2, color: "#cc0000" },
  { id: 3, color: "#ff0000" },
  { id: 4, color: "#ff5050" },
  { id: 5, color: "#cc6600" },
  { id: 6, color: "#ff9900" },
  { id: 7, color: "#ffcc66" },
  { id: 8, color: "#ccff33" },
  { id: 9, color: "#009900" },
  { id: 10, color: "#33cc33" },
  { id: 11, color: "#00cc66" },
  { id: 12, color: "#009999" },
  { id: 13, color: "#0033cc" },
  { id: 14, color: "#0066ff" },
  { id: 15, color: "#6666ff" },
  { id: 16, color: "#9966ff" }];

export const SamplerSlice = createSlice({
  name: "sampler",
  initialState: [
    { id: 1, name: "Snare 1", uri: "snare1.wav", type: "default", color: "#800000" },
    { id: 2, name: "Snare 2", uri: "snare2.wav", type: "default", color: "#cc0000"},
    { id: 3, name: "Snare 3", uri: "snare3.wav", type: "default", color: "#ff0000"},
    { id: 4, name: "Snare 808", uri: "snare-808.wav", type: "default", color: "#ff5050"},
    { id: 5, name: "Kick 1", uri: "kick1.wav", type: "default", color: "#cc6600"},
    { id: 6, name: "Kick 808", uri: "kick-808.wav", type: "default", color: "#ff9900"},
    { id: 7, name: "Kick 3", uri: "kick3.wav", type: "default", color: "#ffcc66"},
    { id: 8, name: "Kick 4", uri: "kick4.wav", type: "default", color: "#ccff33"},
    { id: 9, name: "Cymbal 1",uri: "cymbals1.wav", type: "default", color: "#009900"},
    { id: 10, name: "Cymbal 2",uri: "cymbals2.wav", type: "default", color: "#33cc33"},
    { id: 11, name: "Hi-Hat 1", uri: "hihat1.wav", type: "default", color: "#00cc66"},
    { id: 12, name: "Hi-Hat 808", uri: "hihat-808.wav", type: "default", color: "#009999"},
    { id: 13, name: "Clap 1",uri: "clap1.wav", type: "default", color: "#0033cc"},
    { id: 14, name: "Clap 808", uri: "clap-808.wav", type: "default", color: "#0066ff"},
    { id: 15, name: "Openhat 808", uri: "openhat-808.wav", type: "default", color: "#6666ff"},
    { id: 16, name: "Synth 1",uri: "synth1.wav", type: "default", color: "#9966ff"},
  ],
  reducers: {
    addSampler: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          assetName: action.payload,
        },
      ];
    },
    editSampler: (state, action) => {
      var item = {...action.payload.item};
      var color = action.payload.item.type == "recording" ? "#FFFFFF" : colorsTab[item.id-1].color;
      var newItem = {
        ...item,
        color: color
      };
      state[action.payload.index]=newItem;
      return state;
    },
  },
});

export const { addSampler, editSampler } = SamplerSlice.actions;
export const samplerSelector = (state) => state.sampler;
export default SamplerSlice.reducer;
