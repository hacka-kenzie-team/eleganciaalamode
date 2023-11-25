import { create } from "zustand";
import { IAdminState } from "./@adminTypes";

export const adminStore = create<IAdminState>()((set) => ({
    activeAdminList: null,

    setActiveAdminlist: (listName) => { set((state) => ({activeAdminList: listName}))}
})) 