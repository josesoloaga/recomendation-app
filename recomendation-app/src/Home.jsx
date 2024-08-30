import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <TitleApp>Mejores recomendaciones</TitleApp>
      <RecomendacionStart onClick={() => navigate('/recomendation')}>Explorar</RecomendacionStart>
    </StartContainer>
  );
};

const StartContainer = styled.div`
border: 1px solid green;
border-radius: 4px;
padding: 20px;
margin-top: 30px;
text-align: center;;
heigth: 100%

`

const RecomendacionStart = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: rgb(31, 157, 115);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TitleApp = styled.h1`
font-family: sans-serif;
`