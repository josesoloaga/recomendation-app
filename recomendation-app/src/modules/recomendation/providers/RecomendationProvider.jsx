import { useState, useEffect, useCallback } from 'react';
import { RecomendationContext } from './RecomendationContext';
import { getAllCategories } from '../../../infraestructure/services/getAllCategories';
import { getAllSubcategories } from '../../../infraestructure/services/getSubCategorie';
import { getAllColors } from '../../../infraestructure/services/getColor';
import { getThisProduct } from '../../../infraestructure/services/getProduct';

export const RecomendationProvider = ({ children }) => {
  const [categorySelected, setCategorySelected] = useState(null);
  const [subCategorySelected, setSubCategorySelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const [categories, setCategories] = useState(null);
  const [colors, setColors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProduct] = useState(null);


  const getCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllCategories();
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllSubcategories(categorySelected);
      //console.log("data en getSubCategories: ", data);
      setSubCategories(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [categorySelected]);

  const getColors = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllColors(subCategorySelected);
      setColors(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [subCategorySelected]);

  const getProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getThisProduct(
        categorySelected,
        subCategorySelected,
        colorSelected,
      );
      console.log(' product data:', data);
      if (data && data.length > 0) {
        setProduct(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching product:', error);
      setIsLoading(false);
    }
  }, [categorySelected, subCategorySelected, colorSelected]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategorySelected = (value) => {
    //console.log("value: ", value);
    setCategorySelected(value);
  };

  const handleSubCategorySelected = (value) => {
    //console.log("value de handleSubCategorySelected: ", value);
    setSubCategorySelected(value);
  };

  const handleColorSelected = (value) => {
    setColorSelected(value);
  };

  const handleProductSelected = (value) => {
    console.log('value: ', value);

    setProduct(value);
  };

  const handleChangesteps = (value) => {
    setCurrentStep(value);
  };

  const handleGoBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const resetValues = () => {
    setCategorySelected(null);
    setSubCategorySelected(null);
    setColorSelected(null);
    setSubCategories(null);
    setCategories(null);
    setColors(null);
    setIsLoading(true);
    setCurrentStep(1);
    setProduct({});
    getCategories();
  };

  return (
    <RecomendationContext.Provider
      value={{
        categories,
        subCategories,
        colors,
        isLoading,
        currentStep,
        products,
        setCategorie: handleCategorySelected,
        changeStep: handleChangesteps,
        setSubCategories: handleSubCategorySelected,
        getSubCategories,
        getColors,
        setColors: handleColorSelected,
        handleGoBack,
        getProduct,
        setProduct: handleProductSelected,
        startNewRecomendation: resetValues,
      }}
    >
      {children}
    </RecomendationContext.Provider>
  );
};
