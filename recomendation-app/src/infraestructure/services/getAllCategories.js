import { apiClient } from "../apiClient/apiClient"

export const getAllCategories = async ()=>{
    const allCategories = await apiClient.get("api/v1/recommender/category")
    return allCategories
}