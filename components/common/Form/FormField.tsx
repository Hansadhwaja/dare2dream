import type { ReactNode } from "react"
import type {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form"
import { Controller } from "react-hook-form"

import { Field, FieldError } from "@/components/ui/field"

interface FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  render: (
    field: ControllerRenderProps<TFieldValues, TName>
  ) => ReactNode
}

const FormField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ control, name, render }: FormFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {render(field)}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

export default FormField