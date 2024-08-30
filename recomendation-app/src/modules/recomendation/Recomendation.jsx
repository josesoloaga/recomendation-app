import { useRecomendation } from './providers/useRecomendation';
import { RecomendationComponent } from './_components/RecomendationComponent';
import StepperComponent from './_components/StepperComponent';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Recomendation = () => {

  const navigate = useNavigate();

  const {
    categories,
    isLoading,
    subCategories,
    currentStep,
    categorySelected,
    colors,
    subCategorySelected,
    colorSelected,
    setCategorie,
    setSubCategories,
    changeStep,
    setColors,
    getSubCategories,
    getColors,
    getProduct,
    handleGoBack,
  } = useRecomendation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (currentStep === 1 && categories.length > 0) {
    return (
      <>
            <ButtonExit onClick={() => navigate('/')}>Salir de Recomendaciones</ButtonExit>
        <StepperComponent />
        <RecomendationComponent
          recomendation={categories}
          onChange={setCategorie}
        />
        <ContainerBotonStep>
          <BotonStep
            disabled={typeof categorySelected === 'number'}
            onClick={() => {
              getSubCategories();
              changeStep(2);
            }}
          >
            Siguiente
          </BotonStep>
        </ContainerBotonStep>
      </>
    );
  }

  if (currentStep === 2 && subCategories.length > 0) {
    return (
      <>
            <ButtonExit onClick={() => navigate('/')}>Salir de Recomendaciones</ButtonExit>
        <StepperComponent />
        <RecomendationComponent
          recomendation={subCategories}
          onChange={setSubCategories}
        />
        <ContainerBotonStep>
          <BotonStep
            disabled={typeof subCategorySelected === 'number'}
            onClick={() => {
              getColors();
              changeStep(3);
            }}
          >
            Siguiente
          </BotonStep>
          <BotonStep
            onClick={() => {
              handleGoBack();
            }}
          >
            Volver
          </BotonStep>
        </ContainerBotonStep>
      </>
    );
  }

  if (currentStep === 3 && colors.length > 0) {

    return (
      <>
      <ButtonExit onClick={() => navigate('/')}>Salir de Recomendaciones</ButtonExit>
        <StepperComponent />
        <RecomendationComponent recomendation={colors} onChange={setColors} />
        <ContainerBotonStep>
          <BotonStep
            disabled={typeof colorSelected === 'number'}
            onClick={() => {
              getProduct();
              changeStep(4);
            }}
          >
            Siguiente
          </BotonStep>
          <BotonStep
            onClick={() => {
              handleGoBack();
            }}
          >
            Volver
          </BotonStep>
        </ContainerBotonStep>
      </>
    );
  }
};

const ContainerBotonStep = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
`;

const BotonStep = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: rgb(31, 157, 115);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonExit = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #cf0c0c;;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`