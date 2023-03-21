import {configureStore} from "@reduxjs/toolkit"
import viewDetailsReducer from './slices/viewDetails'
const store = configureStore({
    reducer: {
        viewDetails:viewDetailsReducer
    }
})
export default store;