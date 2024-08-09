import { create } from 'zustand'

interface StoreIsOpenCold{
    isOpenCold:boolean;
    setIsOpenCold:() => void;
}

const useStoreIsOpenCold = create<StoreIsOpenCold>((set) => ({
    isOpenCold: false,
    setIsOpenCold: () => set((state) => ({ isOpenCold: !state.isOpenCold })),
}));

export default useStoreIsOpenCold;
