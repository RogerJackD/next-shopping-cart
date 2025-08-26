import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDistpatch, RootState } from "./store";

export const UseAppDistpatch = () => useDispatch<AppDistpatch>();
export const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector;
