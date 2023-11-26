import { create } from "zustand";
import { IAdminState } from "./@adminTypes";

export const adminStore = create<IAdminState>()((set) => ({
    activeAdminList: null,
    adminAddModal: false,
    adminEditModal:false,
    adminDeleteModal: false,

    setActiveAdminlist: (listName) => { set((state) => ({activeAdminList: listName}))},
    setAdminAddModal: (boolean) => { set({adminAddModal: boolean})},
    setAdminEditModal: (boolean) => { set({adminEditModal: boolean})},
    setAdminDeleteModal: (boolean) => { set({adminDeleteModal: boolean})},
})) 