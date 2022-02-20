import { useState } from 'react'

import { CardActionArea, CardMedia, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { ModalPizza } from '../ModalPizza'
import { convertPrice } from '../../utils/convertPrice'

import { BoxStyle, CardContainerStyle, CardContentStyle } from './styles'

interface DataPizzaType {
  name: string
  price: number
  ingredients: Array<string>
}

export const PizzaCard = ({ name, price, ingredients }: DataPizzaType) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  if (name.includes('Pizza')) {
    name = name.slice(-6)
  }

  const img = process.env.PUBLIC_URL + `assets/pizza-${name.toLowerCase()}.jpg`

  return (
    <>
      <CardContainerStyle>
        <CardActionArea onClick={handleOpenModal}>
          <CardMedia component="img" image={img} alt={`Pizza ` + name} />
          <CardContentStyle>
            <Typography component="p" data-content="title">
              {`Pizza ` + name}
            </Typography>
            <Typography component="p" data-content="description">
              <span data-content="title-description">Ingredients:</span>
              {ingredients.map((ingredient: string, index: number) => {
                return <span key={index}>{ingredient}</span>
              })}
            </Typography>

            <BoxStyle>
              <Typography component="p" data-content="price">
                {convertPrice(price)}
              </Typography>
              <AddCircleIcon aria-label="Add order'" />
            </BoxStyle>
          </CardContentStyle>
        </CardActionArea>
      </CardContainerStyle>

      <ModalPizza
        openModal={openModal}
        closeModal={handleCloseModal}
        img={img}
        name={name}
        price={price}
        ingredients={ingredients}
      />
    </>
  )
}
