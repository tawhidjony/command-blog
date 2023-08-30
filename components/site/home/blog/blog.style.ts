import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
export const blogStyle = (theme:Theme):SxProps => {
    return {
        '& .blog':{
            borderRadius:".5rem",
            height:"100%",
            minHeight:"300px",
            color:theme.palette.primary.contrastText,
            boxShadow:theme.shadows[2],
            backgroundColor:theme.palette.background.paper,
            overflow:"hidden",
            cursor:"default",
            '&:hover':{
                transition: "transform 0.15s ease-in-out",
                transform: "scale3d(1.02, 1.02, 1)",
                boxShadow:theme.shadows[5],
            },
            
            '&__thumbnail':{
                height:"100%",
                maxHeight:{xs:"200px", md:"150px"},
                width:"100%",
                img:{
                    width:"100%",
                    height:"100%"
                }
            },
            '&__containt':{
                padding:1,
                '&__header':{
                    h2:{
                        fontSize:"14px",
                        fontWeight:600
                    }
                },
                '&__body':{
                    marginTop:2,
                    p:{
                        fontSize:"14px",
                    }
                },
                '&__footer':{
                    marginTop:2,
                    display:"flex",
                    alignItems:"center",
                    gap:1,
                    '&__avatar':{
                        width:20,
                        height:20
                    },
                    p:{
                        fontSize:"14px",
                        fontStyle:"italic"
                    },
                 
                }
            },
            
        }
    }
}