import { TSliderSimpleProps } from "./types";

export const SLIDER_SIMPLE_SETTINGS = (props: TSliderSimpleProps) => {
  const {
    arrows = false,
    className,
    dots = false,
    fade = false,
    infinite = false,
    nextArrow,
    prevArrow,
    slidesToScroll = 1,
    slidesToShow = 1,
    speed = 500,
    swipeToSlide = false,
    autoplay = false,
    autoplaySpeed = 3000,
  } = props;

  return {
    settings: {
      arrows,
      className,
      dots,
      fade,
      infinite,
      speed,
      slidesToScroll,
      slidesToShow,
      swipeToSlide,
      autoplay,
      autoplaySpeed,
    },
  };
};
