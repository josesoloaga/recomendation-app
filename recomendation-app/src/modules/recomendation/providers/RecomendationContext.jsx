import React from "react";

export const RecomendationContext = React.createContext({
    currentStep: 1,
    categorySelected: "",
    subCategorySelected: "",
    colorSelected: "",
    categories:[],
    subcategories:[],
    colors: [],
    setCategorie: ()=>{},
    setSubCategorie: ()=>{},
    setColor: ()=>{},
    updateStep: ()=>{},
    changeStep: ()=>{},
})