import { create } from 'zustand'

interface StoreIsOpenColabs{
    isOpenColab:boolean;
    setIsOpenColab:() => void;
}

const useStoreIsOpenColabs = create<StoreIsOpenColabs>((set) => ({
    isOpenColab: false,
    setIsOpenColab: () => set((state) => ({ isOpenColab: !state.isOpenColab })),
}));

export default useStoreIsOpenColabs;
