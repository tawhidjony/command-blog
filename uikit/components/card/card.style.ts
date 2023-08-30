import { Theme } from "@mui/material/styles"
import { SxProps } from "@mui/material"


export const UICardStyle = (theme:Theme):SxProps => {
    return {
        '& .card':{
            boxShadow:theme.shadows[10],
            backgroundColor:theme.palette.background.paper,
            borderRadius:"8px"
        }
    }
}
export const UICardHeaderStyle = (theme:Theme):SxProps => {
    return {
        '& .header':{
           padding:"10px"
        }
    }
}
export const UICardBodyStyle = (theme:Theme):SxProps => {
    return {
        '& .body':{
            
        }
    }
}
export const UICardFooterStyle = (theme:Theme):SxProps => {
    return {
        '& .footer':{
            
        }
    }
}