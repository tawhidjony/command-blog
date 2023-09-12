import clsx from "clsx";
import { memo } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { TSliderSimpleProps } from "./types";
import  { SLIDER_SIMPLE_SETTINGS } from "./settings";
import { Box } from "@mui/material";

const SliderSimpleComponent: FC<TSliderSimpleProps> = (props) => {
  const { alt = "", dataTestId = "uikit__slider-simple", height, images, width, sliderHeight } = props;
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
  
  return (
    <Slider {...settings} data-testid={dataTestId}  >
      {images && images.map((image, index) => {
          return (
            <Box sx={{height:sliderHeight}} key={index}>
              <Box
                component={'img'}
                alt={alt}
                height={height}
                src={image}
                width={width}
                sx={props.sx}
              />
            </Box>
          );
        })}
    </Slider>
  );
};

export const UICarousel = memo(SliderSimpleComponent);