import { IProduct } from "./@productTypes";

export interface IAdminState {
    activeAdminList: string | null
    setActiveAdminlist: (list: ("all" | "sale" | "category" | "collections" | "stock" | "add")) => void;
}