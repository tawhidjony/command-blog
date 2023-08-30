import { Box, useTheme } from "@mui/material";
import React, { FC } from "react";
import { UICardBodyProps, UICardFooterProps, UICardHeaderProps, UICardProps } from "./types";
import { UICardBodyStyle, UICardFooterStyle, UICardHeaderStyle, UICardStyle } from "./card.style";

export const UICard = (props:UICardProps)=> {
  const { children } = props;
    const theme = useTheme()
  return <Box sx={UICardStyle(theme)}><Box className={'card'}>{children}</Box></Box>;
};

const CardHeader:FC<UICardHeaderProps> = (props) => {
    const { children } = props;
      const theme = useTheme()
    return <Box sx={UICardHeaderStyle(theme)}><Box className={'header'}>{children}</Box></Box>
}

const CardBody:FC<UICardBodyProps> = (props) => {
    const { children } = props;
      const theme = useTheme()
    return <Box sx={UICardBodyStyle(theme)}><Box className={'body'}>{children}</Box></Box>
}
const CardDFooter:FC<UICardFooterProps> = (props) => {
    const { children } = props;
      const theme = useTheme()
    return <Box sx={UICardFooterStyle(theme)}><Box className={'footer'}>{children}</Box></Box>
}

UICard.Header = CardHeader
UICard.Body = CardBody
UICard.Footer = CardDFooter