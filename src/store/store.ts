import { configureStore} from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice"; 
import { ChatSlice } from "./ChatSlice";

export const store=configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    reducer:{
        auth:AuthSlice.reducer,
        chat:ChatSlice.reducer
    }
});

export type RootState =ReturnType<typeof store.getState>