import { API_BASE_URL } from "@/app/api/api"
import { IProduct } from "@/contexts/@productTypes"

export async function getProducts(): Promise<IProduct[] | []>{
    try {
        const response = await fetch(`${API_BASE_URL}/products`, { next: { revalidate: 5 } });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}