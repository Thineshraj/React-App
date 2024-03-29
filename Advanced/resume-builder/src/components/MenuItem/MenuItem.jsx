import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const MenuItem = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component='img'
          height='140'
          image='/static/images/cards/contemplative-reptile.jpg'
          alt='green iguana'
        /> */}
        <div>{props.icon}</div>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MenuItem
