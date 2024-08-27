import { useState, useEffect } from "react";
import { RecomendationContext } from "./RecomendationContext";
import { getAllCategories } from "../../../infraestructure/services/getAllCategories";

export const RecomendationProvider = ({ children }) => {
  // const [currentStep, setCurrentStep] = useState(1)
  const [categorySelected, setCategorySelected] = useState("");
  // const [subCategorySelected, setSubCategorySelected] = useState("")
  const [categories, setCategories] = useState([]);
  // const [currentStep, setCurrentStep] = useState(1)
  // const [currentStep, setCurrentStep] = useState(1)
  // const [currentStep, setCurrentStep] = useState(1)
  console.log("categoriesSelected: ", categorySelected);

  const getCategories = async () => {
    try {
      const { data } = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategorieSelected = (value) => {
    setCategorySelected(value);
  };

  return (
    <RecomendationContext.Provider
      value={{
        categories,
        setCategorie: handleCategorieSelected,
      }}
    >
      {children}
    </RecomendationContext.Provider>
  );
};
