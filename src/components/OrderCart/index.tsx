import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { OrderCartStyled } from './style';

export const OrderCart = () => {
  return (

    <OrderCartStyled title='Go to order page'>
      <ShoppingCartCheckoutIcon/>
      <span>1 item</span>
    </OrderCartStyled>
  );
}