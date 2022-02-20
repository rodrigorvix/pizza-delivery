import { useContext, useEffect, useState } from 'react'

import { Grid } from '@mui/material'

import { GlobalContext } from '../../contexts/GlobalSorage'

import { OrderCart } from '../OrderCart'
import { PizzaCard } from '../PizzaCard'

import { ListPizzaCardsStyle } from './style'

interface DataPizzaType {
  name: string
  price: number
  ingredients: Array<string>
}

export const ListPizzaCards = () => {
  const [dataListPizzas, setDataListPizzas] = useState<DataPizzaType[]>([])

  const context = useContext(GlobalContext)

  useEffect(() => {
    getListPizzas()

    async function getListPizzas() {
      const response = await fetch('./server/pizzas.json')
      const data = await response.json()

      setDataListPizzas([...data])
    }
  }, [])

  return (
    <ListPizzaCardsStyle>
      <Grid container spacing={3}>
        {dataListPizzas.map((data: DataPizzaType, index: number) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={4} key={index}>
              <PizzaCard
                name={data.name}
                price={data.price}
                ingredients={data.ingredients}
              />
            </Grid>
          )
        })}
      </Grid>

      {context.orderInfo.length > 0 && (
        <OrderCart countOrder={context.orderInfo.length} />
      )}
    </ListPizzaCardsStyle>
  )
}
