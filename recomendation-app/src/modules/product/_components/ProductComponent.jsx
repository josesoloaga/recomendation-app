import styled from 'styled-components';
import imageProduct from '../../../assets/cualidades-producto.jpg';

export const ProductComponent = ({ product }) => {

  const isInStock = product.stock_quantity > 0;

  return (
    <ProductCard>
      <Image src={imageProduct} />
      <h1>{product.name}</h1>
      <ProductRating averageRating={product.average_rating}/>
      <h2>{product.price}€</h2>
      <ShippingInfo>Envio gratis: {product.is_free_shipping ? '🚚' : '🚫'}</ShippingInfo>
      <small>Stock: {isInStock ? '✅' : '❌'}</small>
    </ProductCard>
  );
};


const ProductRating = ({ averageRating }) => {
  const fullStars = Math.floor(averageRating);
  const hasPartialStar = averageRating % 1 !== 0;
  const percent = (averageRating % 1) * 100;

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} filled='true'>★</Star>;
        }
        if (index === fullStars && hasPartialStar) {
          return (
            <Star key={index} filled ='true'>
              <PartialStar percent={percent}>★</PartialStar>
            </Star>
          );
        }
        return <Star key={index}>★</Star>;
      })}
    </StarContainer>
  );
};


// estrellas
const StarContainer = styled.div`
  display: inline-flex;
`;


const Star = styled.span`
  font-size: 24px; 
  color: ${props => props.filled ? '#FFD700' : '#e0e0e0'};
  position: relative;
  display: inline-block;
`;

const PartialStar = styled.span`
  font-size: 24px;
  color: transparent;
  background: linear-gradient(90deg, #FFD700 ${(props) => props.percent}%, #e0e0e0 ${(props) => props.percent}%);
  background-clip: text;
  -webkit-background-clip: text;
  position: absolute;
  top: 0;
  left: 0;
`;




const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  min-width: 320px;
  padding: 6px;
  box-shadow: 0px 0px 3px 1px rgb(190, 190, 190);
  align-items: center;
`;

const Image = styled.img`
  width: 320px;
  cover: fill;
  border-radius: 4px 4px 0 0;
`;

const ShippingInfo = styled.p`
font-family: sans-serif;
font-size: small;
font-weight: 600;
`