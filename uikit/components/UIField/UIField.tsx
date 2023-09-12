import { memo } from "react";
import Input from "./Form/Input";

type Props = {}

export const UIField = (props: Props) => {
  return (
    <div>Form</div>
  )
}


UIField.Input = memo(Input);
