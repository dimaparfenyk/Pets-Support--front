import { configureStore } from '@reduxjs/toolkit';
// import { authApi } from './Auth/authApi';
import { authReducer } from './Auth/auth-slice';
import { noticesApi } from './Notices/noticesApi';
import noticesReducer from './Notices/noticesSlice';
import { newsApi } from './News/newsApi';
import newsReducer from './News/newsSlice';
import { userApi } from './User/userApi';
import userReducer from './User/userSlice';

import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistAuthConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const persistedUserReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    notices: noticesReducer,
    news: newsReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(noticesApi.middleware)
      .concat(newsApi.middleware)
      .concat(userApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
