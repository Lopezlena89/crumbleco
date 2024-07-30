import { create } from 'zustand'

interface StoreStateMenu{
    statePrice:number;
    setStatePlusPrice: (value: number) => void;
    setStateMinusPrice: (value: number) => void;
}

const useStateCartStore = create<StoreStateMenu>((set) => ({
    statePrice: 0,
    setStatePlusPrice: (value: number) =>
        set((state) => ({ statePrice: state.statePrice + value   })),
    setStateMinusPrice: (value: number) =>
        set((state) => ({ statePrice: state.statePrice - value  })),
}));

export default useStateCartStore;

