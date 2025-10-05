// // features/home/homeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../Hooks/BaseUrl";
// import BaseUrl from "../../Hooks/BaseUrl";
// import { count } from "console";

// console.log("API URL:", BaseUrl);
// export const fetchHomeData = createAsyncThunk(
//   "home/fetchHomeData",
//   async () => {
//     console.log("API URL:", BaseUrl.get("/home44")); // سيظهر الـ base URL

//     // const response = await BaseUrl.get('/home') ;
//     // return response.data
//   }
// );

// console.log('////=====================Home Data ========================///');

// console.log('////==========================///');
// console.log('////==========================///');
// console.log(fetchHomeData)
// console.log('////==========================///');
// console.log('////==========================///');

// console.log('////=====================Home Data End  ==================///');
////=======initialState§  ======///
// Create async thunk for fetching data
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    try {
      console.log('API URL:', BaseUrl.get('/home'))
      
      const response = await BaseUrl.get('/home')
      return response.data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }
);

const initialState = {
  slider: [],
  features: [],
  products: [],
  loading: false,
  error: null as string | null | number,
  count: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addOne(state) {
      state.count += 1;
    },
    minusOne(state,action) {
      ///action.payload
      // console.log(action.payload)
      // state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchHomeData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchHomeData.fulfilled, (state, action) => {
      state.loading = false;
      state.slider = action.payload.slider;
      state.features = action.payload.features;
      state.products = action.payload.products;
    })
    .addCase(fetchHomeData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});
// Export actions and reducer
export const { addOne, minusOne } = homeSlice.actions;

export default homeSlice.reducer;
