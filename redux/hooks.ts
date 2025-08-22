import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDistpatch, RootState } from './store';

export const useAppDistpatch = () => useDispatch<AppDistpatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;