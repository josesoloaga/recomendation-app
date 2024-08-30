import { apiClient } from "../apiClient/apiClient"

export const getThisProduct = async (id_category, id_subcategory, id_color)=>{
    
    const product = await apiClient.get(`api/v1/recommender/product?id_category=${id_category}&id_subcategory=${id_subcategory}&id_color=${id_color}`);
    return product
}
