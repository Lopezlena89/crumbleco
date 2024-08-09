import { create } from 'zustand'

interface StoreIsOpen{
    isOpen:boolean;
    setIsOpen:() => void;
}

const useStoreIsOpen = create<StoreIsOpen>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useStoreIsOpen;
