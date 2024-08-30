import { apiClient } from "../apiClient/apiClient"

export const getAllSubcategories = async (idCategory)=>{
    const subCategories = await apiClient.get(`api/v1/recommender/category/${idCategory}/subcategory`)
    return subCategories
}