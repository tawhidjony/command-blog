import { FormProvider } from "react-hook-form";
import { IFormPropsType } from "./types";

export const UIForm = <T extends {}>({
  children,
  methods,
}: IFormPropsType<T>) => {
  return (
    <>
      <FormProvider {...methods}>{children}</FormProvider>
    </>
  );
};
