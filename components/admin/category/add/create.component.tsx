"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CategorySchema, IFCategoryType, defaultValues } from "./create.decorator";
import CreateView from "./create.view";

type Props = {};

export const CreateComponent = (props: Props) => {
  
  const methods = useForm<IFCategoryType>({
    resolver:yupResolver<IFCategoryType>(CategorySchema),
    defaultValues,
  });

  const onSubmit = (value: IFCategoryType) => {
    console.log(value);
  };

  return (
    <>
      <CreateView onSubmit={onSubmit} methods={methods} />
    </>
  );
};
