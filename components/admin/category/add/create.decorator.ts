import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import * as yup from "yup";

export type IFCategoryType = {
  name:string;
  slug:string;
};

export type ICreateViewPropType<T extends FieldValues> = {
  children?: React.ReactNode;
  onSubmit: (value: T) => void;
  methods:UseFormReturn<T>
};

export const defaultValues:IFCategoryType = {
  name:"",
  slug:"",
};

export const CategorySchema = yup.object<IFCategoryType>({
  name: yup.string().required("This filed is required"),
  slug: yup.string().required("This filed is required"),
}).required() as unknown as yup.ObjectSchema<IFCategoryType>;

