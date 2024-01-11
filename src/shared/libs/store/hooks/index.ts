// imports ================================================== //
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "..";

// types ==================================================== //
type useAppDispatch = () => AppDispatch
type useAppStore = () => AppStore
type useAppSelector = TypedUseSelectorHook<ReturnType<RootState>>

// main ===================================================== //
const useAppDispatch: useAppDispatch = useDispatch;
const useAppStore: useAppStore = useStore;
const useAppSelector: useAppSelector = useSelector;

// exports ================================================== //
export { useAppDispatch, useAppStore, useAppSelector };