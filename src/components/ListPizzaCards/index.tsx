import { Grid } from "@mui/material";
import { PizzaCard } from "../PizzaCard";
import { ListPizzaCardsStyle } from "./style";

export const ListPizzaCards = () => {
  return (

    <ListPizzaCardsStyle>
      <Grid container spacing={2}>
  
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
    </ListPizzaCardsStyle>
  );
}