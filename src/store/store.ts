import { configureStore } from '@reduxjs/toolkit'
import { reducer as storeReducer } from '@/feature'

export const store = configureStore({
    reducer: {
        reducer: storeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
