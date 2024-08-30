import { useRecomendation } from "../providers/useRecomendation";
import styled from "styled-components";
export const RecomendationComponent = ({
  recomendation,
  onChange,
})=>{

    return(
      <StyledList>
        {recomendation?.map((item) => (

          <StyledListItem key={item.name}>
            <StyledCheckbox type="checkbox" onChange={()=>onChange(item.id)}/>
            <StyledLabel>{item.name}</StyledLabel>
          </StyledListItem>
        ))}
      </StyledList>
    )
}


const StyledList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgb(190, 190, 190);

`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
    font-family: sans-serif;
    font-weight: 500;
    color: #09532a;
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;

`;

const StyledLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;
