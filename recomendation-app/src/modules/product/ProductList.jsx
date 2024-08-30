import styled from 'styled-components';
import { useRecomendation } from '../recomendation/providers/useRecomendation';
import { ProductComponent } from './_components/ProductComponent';
import { useState } from 'react';

export const ProductList = () => {
  const { products, startNewRecomendation, handleGoBack, isLoading } =
    useRecomendation();

  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [selectedRange, setSelectedRange] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (isLoading) {
    return <Loader></Loader>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesShipping = isFreeShipping ? product.is_free_shipping : true;

    const matchesPrice = (() => {
      if (selectedRange === '0-500')
        return product.price >= 0 && product.price <= 500;
      if (selectedRange === '500-1000')
        return product.price > 500 && product.price <= 1000;
      if (selectedRange === '1000+') return product.price > 1000;
      if (selectedRange === 'todos') return product;
      return true;
    })();

    return matchesShipping && matchesPrice;
  });


   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

   const currentProducts = filteredProducts.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );
 
   const handleNextPage = () => {
     if (currentPage < totalPages) {
       setCurrentPage(currentPage + 1);
     }
   };
 
   const handlePreviousPage = () => {
     if (currentPage > 1) {
       setCurrentPage(currentPage - 1);
     }
   };

  return (
    <div>
      <ControlPanel>
        <FilterContainer>
          <PriceRangeFilter
            selectedRange={selectedRange}
            onSelectRange={setSelectedRange}
          />
                    <FreeShippingFilter
            isFreeShipping={isFreeShipping}
            onToggle={setIsFreeShipping}
          />
        </FilterContainer>
        <ContainerBotonStep>
          <BotonStep onClick={startNewRecomendation}>Limpiar</BotonStep>
          <BotonStep onClick={handleGoBack}>Volver</BotonStep>
        </ContainerBotonStep>
      </ControlPanel>

      <ListContainer>
      {currentProducts.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </ListContainer>
      <Pagination>
        <BotonStep disabled={currentPage === 1} onClick={handlePreviousPage}>
          Anterior
        </BotonStep>
        <PageIndicator>
          Página {currentPage} de {totalPages}
        </PageIndicator>
        <BotonStep disabled={currentPage === totalPages} onClick={handleNextPage}>
          Siguiente
        </BotonStep>
      </Pagination>
    </div>
  );
};

const FreeShippingFilter = ({ isFreeShipping, onToggle }) => (
  <CheckboxLabel>
    <input
      type="checkbox"
      checked={isFreeShipping}
      onChange={(e) => onToggle(e.target.checked)}
    />
    Envio Gratis 🚚
  </CheckboxLabel>
);

const PriceRangeFilter = ({ selectedRange, onSelectRange }) => (
  <RangeContainer>
    <RangeLabel>
      <RangeInput
        type="radio"
        value="todos"
        checked={selectedRange === 'todos'}
        onChange={(e) => onSelectRange(e.target.value)}
      />
      Todos
    </RangeLabel>
    <RangeLabel>
      <RangeInput
        type="radio"
        value="0-500"
        checked={selectedRange === '0-500'}
        onChange={(e) => onSelectRange(e.target.value)}
      />
      0€ - 500€
    </RangeLabel>
    <RangeLabel>
      <RangeInput
        type="radio"
        value="500-1000"
        checked={selectedRange === '500-1000'}
        onChange={(e) => onSelectRange(e.target.value)}
      />
      500€ - 1000€
    </RangeLabel>
    <RangeLabel>
      <RangeInput
        type="radio"
        value="1000+"
        checked={selectedRange === '1000+'}
        onChange={(e) => onSelectRange(e.target.value)}
      />
      1000€+
    </RangeLabel>
  </RangeContainer>
);

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

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

const ControlPanel = styled.header`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  border: 1px solid rgb(31, 157, 115);
  border-radius: 4px;
  margin: 20px;
  padding: 10px;

`;

const CheckboxLabel = styled.label`
  margin: 10px;
  cursor: pointer;
  color:rgb(31, 157, 115);
  font-weight: 600;
  font-family: sans-serif;
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 10px 0px;

`;

const RangeLabel = styled.label`
  margin-right: 10px;
  cursor: pointer;
`;
const RangeInput = styled.input`

`

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;



const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageIndicator = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

const Loader = styled.span`
   width: 78px;
    height: 78px;
    border: 5px solid #FFF;
    border-bottom-color: rgb(31, 157, 115);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    text-align: center;
    margin: 20% 48%;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`