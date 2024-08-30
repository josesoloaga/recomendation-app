import { Route, Routes } from 'react-router-dom';
import { ProductList } from './modules/product/ProductList';
import { Recomendation } from './modules/recomendation/Recomendation';
import { Home } from './Home';
import { useRecomendation } from './modules/recomendation/providers/useRecomendation';

function App() {
  const { currentStep } = useRecomendation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/recomendation"
        element={currentStep < 4 ? <Recomendation /> : <ProductList />}
      />{' '}
    </Routes>
  );
}

export default App;


