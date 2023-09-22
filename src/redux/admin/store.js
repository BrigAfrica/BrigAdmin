import { configureStore } from '@reduxjs/toolkit'

import adminAuthReducer from './auth/authSlice'

export const adminStore = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
  },
})

