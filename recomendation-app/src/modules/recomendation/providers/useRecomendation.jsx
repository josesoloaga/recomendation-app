import { useContext } from "react";
import { RecomendationContext } from "./RecomendationContext";


export const useRecomendation = ()=>{
    return useContext(RecomendationContext)
}