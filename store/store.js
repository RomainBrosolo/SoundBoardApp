import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../components/Library/LibrarySlice";
import samplerReducer from "../components/Sampler/SamplerSlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
    sampler: samplerReducer
  },
});
