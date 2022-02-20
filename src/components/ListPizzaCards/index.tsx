import { Grid } from "@mui/material";
import { OrderCart } from "../OrderCart";
import { PizzaCard } from "../PizzaCard";
import { ListPizzaCardsStyle } from "./style";

export const ListPizzaCards = () => {
  return (

    <ListPizzaCardsStyle>
      <Grid container spacing={3}>
  
              <Grid item xs={6} sm={4} md={3} lg={4}>
                <PizzaCard/>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={4}>
                <PizzaCard/>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={4}>
                <PizzaCard/>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={4}>
                <PizzaCard/>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={4}>
                <PizzaCard/>
              </Grid>
      </Grid>

      <OrderCart/>
    </ListPizzaCardsStyle>
  );
}