"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { heroSectionStyle } from "./heroSection.style";
import { UICard, UICarousel } from "@/uikit";

type Props = {};

const HeroSectionView = (props: Props) => {
  const sliderImage = [
    "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1550684847-75bdda21cc95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];
  return (
    <Container sx={heroSectionStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box>
            <UICarousel
              images={sliderImage}
              sliderHeight="320px"
              autoplay={true}
              autoplaySpeed={5000}
              infinite={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <UICard>
              <UICard.Header>Header</UICard.Header>
              <UICard.Body>Body</UICard.Body>
              <UICard.Footer>Footer</UICard.Footer>
            </UICard>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSectionView;
