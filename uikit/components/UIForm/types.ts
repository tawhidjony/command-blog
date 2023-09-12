import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export type IFormPropsType<T extends FieldValues> = {
  children?: React.ReactNode | React.ReactNode[]
  methods:UseFormReturn<T>
};
