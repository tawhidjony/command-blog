import { Button } from "@mui/material";
import React from "react";

type IUIButtonProps = {
    children:React.ReactNode
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
export const UIButton = ({children, primary, backgroundColor, size, label,  ...props }:IUIButtonProps)=> {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <Button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            {...props}
        >
        {label}
        </Button>
    )
};
