import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { save, load } from 'redux-localstorage-simple'
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import authReducer from './reducers/auth/authReducer'

const PERSISTED_KEYS: string[] = ['authReducer']
export type RootState = ReturnType<typeof authReducer>;
const store = () =>
  configureStore({
    reducer: {

      authReducer
     
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(
        // Use save middleware only on the client side
        typeof window !== 'undefined'
          ? save({ states: PERSISTED_KEYS, debounce: 1000 })
          : () => (next) => (action) => next(action)
      ),
    // Handle preloaded state only on the client side
    preloadedState:
      typeof window !== 'undefined' ? load({ states: PERSISTED_KEYS }) : {}
  })

  // Extract the dispatch function from the store for convenience
  const actualStore = store();
  const { dispatch } = actualStore;
  export type AppDispatch = typeof actualStore.dispatch;
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Create a custom useDispatch hook with typed dispatch
const useDispatch = () => useAppDispatch<AppDispatch>();

// Export the Redux store, dispatch, useSelector, and useDispatch for use in components
export { store, dispatch, useSelector, useDispatch };