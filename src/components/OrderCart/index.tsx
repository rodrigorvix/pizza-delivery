import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import { OrderCartStyled } from './style';

interface OrderCartPropsType {
  countOrder: number
}


export const OrderCart = ({countOrder}: OrderCartPropsType) => {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate('/order');
  }

  return (

    <OrderCartStyled title='Go to order page' onClick={goToOrderPage}>
      <ShoppingCartCheckoutIcon/>
      <span>{countOrder}  item</span>
    </OrderCartStyled>
  );
}