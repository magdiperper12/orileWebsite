import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './Reducers/HomeSlice'
import HeroReducer from './Reducers/Home/HeroSlice'

export const store = configureStore({
  reducer: {
    // reducers will be added here
    ///HomeSlice
    home: homeReducer,
    Hero:HeroReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
  devTools: process.env.NODE_ENV !== 'production',
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
