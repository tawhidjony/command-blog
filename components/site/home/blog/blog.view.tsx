"use client";
import { Avatar, Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import { blogStyle } from "./blog.style";

type Props = {};

const BlogView = (props: Props) => {
  const theme = useTheme()
  return (
<Box sx={{marginTop:4}}>
<Container sx={blogStyle(theme)} >
      <Grid container spacing={3}>
        {Array(9)
          .fill(0)
          .map(() => {
            return (
              <Grid item xs={12} md={3}>
                <Box className="blog" >
                  <Box className="blog__thumbnail">
                    <Box component={'img'} src="https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                  </Box>
                  <Box className="blog__containt">
                    <Box className="blog__containt__header">
                      <Box component={'h2'}> Lorem ipsum dolor sit amet consect adipi elit. Eveniet, consequ. </Box>
                    </Box>
                    <Box className="blog__containt__body">
                      <Box component={'p'}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo fugit porro, iusto perferendis possimus accusamus. Nostrum vero odio voluptatem minus iusto at dicta sit, harum labore, autem non perferendis?
                      </Box>
                    </Box>
                    <Box className="blog__containt__footer">
                      <Avatar alt="no-image" src="" className="blog__containt__footer__avatar"/>
                      <Box component={'p'} >tawhidjony</Box>
                      <Box component={'p'} >10-05-2022</Box>
                    </Box>
                  </Box>
                  
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Container>
</Box>
  );
};

export default BlogView;
