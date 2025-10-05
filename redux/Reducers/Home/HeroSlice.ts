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
// في fetchHeroData (features/home/HeroSlice.ts)
export const fetchHeroData = createAsyncThunk(
  "home/fetchHeroData",
  async (_, { rejectWithValue }) => {
    try {
      console.log(
        "Calling API ->",
        BaseUrl.defaults?.baseURL + "/hero-section"
      );
      const response = await BaseUrl.get("/hero-section");
      return response.data;
    } catch (error: any) {
      console.error("API Error full:", error);
      if (error.response) {
        // استجابة من السيرفر (status 4xx/5xx)
        console.error("response.status:", error.response.status);
        console.error("response.data:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // لم يصل رد من السيرفر
        console.error("No response: request details ->", error.request);
        return rejectWithValue({ message: "No response from server" });
      } else {
        // خطأ في إعداد الطلب
        console.error("Request setup error:", error.message);
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

interface HeroState {
  slider: any[];
  loading: boolean;
  error: string | null | number;
  count: number;
}

const initialState: HeroState = {
  slider: [],
  loading: false,
  error: null,
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
      // داخل extraReducers عند fulfilled
      .addCase(fetchHeroData.fulfilled, (state, action) => {
        state.loading = false;
        const payloadData = action.payload?.data;
        if (!payloadData) {
          state.slider = [];
        } else {
          state.slider = Array.isArray(payloadData)
            ? payloadData
            : [payloadData];
        }

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
