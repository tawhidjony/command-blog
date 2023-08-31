"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { heroSectionStyle } from "./category.style";
import { UICard } from "@/uikit";

type Props = {};

const CategoryView = (props: Props) => {
  return (
    <Container sx={heroSectionStyle}>
      <Grid container spacing={2}>
         {Array(6).fill(0).map(()=>{
          return <Grid item xs={4} md={2} ><UICard><UICard.Body>Category</UICard.Body></UICard></Grid>
         })}
      </Grid>
    </Container>
  );
};

export default CategoryView;
