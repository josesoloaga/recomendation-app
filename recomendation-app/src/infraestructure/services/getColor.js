import { apiClient } from "../apiClient/apiClient"

export const getAllColors = async (id_subCategory)=>{
    const colors = await apiClient.get(`api/v1/recommender/subcategory/${id_subCategory}/color`)
    return colors
}
