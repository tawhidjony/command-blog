import { TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ name, ...otherProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      {...otherProps}
      size="small"
      fullWidth
      error={!!errors[name]}
      helperText={
        errors[name] ? (errors[name]?.message as unknown as string) : ""
      }
    />
  );
};

export default Input;
