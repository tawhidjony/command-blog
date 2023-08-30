"use client"
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { heroSectionStyle } from './category.style'

type Props = {}

const CategoryView = (props: Props) => {
  return (
    <Container sx={heroSectionStyle} >
      <Grid container spacing={2}>
          <Grid item xs={12} md={12} >
              <Box sx={{border:"1px solid #000"}}>category</Box>
          </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryView

