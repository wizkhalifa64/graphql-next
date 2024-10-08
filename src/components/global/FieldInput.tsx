"use client";

import { FloatLabel } from "primereact/floatlabel";
import { InputText, InputTextProps } from "primereact/inputtext";
type FieldInputProps = InputTextProps & {
  icon?: string;
  label: string;
};
const FieldInput = ({ label, ...props }: FieldInputProps) => {
  return (
    <FloatLabel>
      <InputText className="w-full h-full" {...props} />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldInput;
