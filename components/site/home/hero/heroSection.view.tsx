"use client"
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { heroSectionStyle } from './heroSection.style'

type Props = {}

const HeroSectionView = (props: Props) => {
  return (
    <Container sx={heroSectionStyle} >
      <Grid container spacing={2}>
          <Grid item xs={12} md={8} >
              <Box sx={{border:"1px solid #000"}}>left</Box>
          </Grid>
          <Grid item xs={12} md={4} >
              <Box sx={{border:"1px solid #000"}}>right</Box>
          </Grid>
      </Grid>
    </Container>
  )
}

export default HeroSectionView

