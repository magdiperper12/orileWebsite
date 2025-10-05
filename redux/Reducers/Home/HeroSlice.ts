// // features/home/homeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../../Hooks/BaseUrl";

// console.log('////=====================Home Data ========================///');

// console.log('////==========================///');
// console.log('////==========================///');
// console.log(fetchHomeData)
// console.log('////==========================///');
// console.log('////==========================///');

// console.log('////=====================Home Data End  ==================///');
////=======initialState§  ======///
// Create async thunk for fetching data
export const fetchHeroData = createAsyncThunk(
  "home/fetchHeroData",
  async () => {
    try {
      // console.log('API URL:', BaseUrl.get('/slider'))

      const response = await BaseUrl.get("/hero-section");
      // console.log('======================Slider Data=============================');
      // console.log('Slider Data =====>> ' +  JSON.stringify(response.data, null, 2));
      // console.log('======================Slider Data=============================');
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
);

const initialState = {
  slider: [],
  loading: false,
  error: null as string | null | number,
  count: 0,
};

const HeroSlice = createSlice({
  name: "Hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeroData.fulfilled, (state, action) => {
        state.loading = false;
        state.slider = action.payload.data;
        // console.log('======================payload Data=============================');
        console.log(
          "payload Data =====>> " + JSON.stringify(state.slider, null, 2)
        );
        // console.log('======================payload Data=============================');
      })
      .addCase(fetchHeroData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});
// Export actions and reducer

export default HeroSlice.reducer;
