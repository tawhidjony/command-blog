"use client";
import { UICard } from "@/uikit";
import { Container, Grid } from "@mui/material";
import { heroSectionStyle } from "./category.style";

type Props = {};

const CategoryView = (props: Props) => {
  return (
    <Container sx={heroSectionStyle}>
      <Grid container spacing={2}>
         {Array(6).fill(0).map((index)=>{
          return <Grid key={index} item xs={4} md={2} ><UICard><UICard.Body>Category</UICard.Body></UICard></Grid>
         })}
      </Grid>
    </Container>
  );
};

export default CategoryView;
