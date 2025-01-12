import { useState } from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { capitalize, forEach } from "lodash-es";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

function useValidate<T extends FieldValues>() {
  /**
   * @description A custom hook for generating a Zod schema and integrating it with React Hook Form for form validation.
   *
   * @returns {Object} An object containing methods and properties for form handling:
   * - `createFields`: Function to dynamically create validation schema fields.
   * - `register`: Function to register input fields for validation.
   * - `handleSubmit`: Function to handle form submission.
   * - `errors`: Object containing validation errors for each field.
   */

  /**
   * @function createSchema
   * @description Generates a Zod schema object based on the provided field names.
   *
   * @param {string[]} fields - Array of field names for which validation rules should be created.
   * @returns {z.ZodObject<z.ZodRawShape>} A Zod schema object containing validation rules for the specified fields.
   */
  function createSchema(fields: string[]): z.ZodObject<z.ZodRawShape> {
    const shape: z.ZodRawShape = {};

    forEach(fields, (field) => {
      switch (field) {
        case "email":
          shape[field] = z
            .string()
            .min(1, "Email address is required")
            .email("Invalid email address");
          break;
        case "mobile_no":
          shape[field] = z
            .string()
            .min(1, "Mobile number is required")
            .regex(/^[9]\d{9}$/, "Invalid mobile number");
          break;
        default:
          shape[field] = z
            .string()
            .min(1, `${capitalize(field.replace("_", " "))} is required`);
      }
    });

    return z.object(shape);
  }

  const [schema, setSchema] = useState<z.ZodObject<z.ZodRawShape>>(
    createSchema([]),
  );

  /**
   * @function createFields
   * @description Updates the schema with new fields and resets the form state.
   *
   * @param {string[]} fields - Array of new field names to include in the validation schema.
   */
  function createFields(fields: string[]) {
    const newSchema = createSchema(fields);
    setSchema(newSchema);
    reset();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return {
    createFields,
    register,
    handleSubmit,
    errors,
  };
}

export { useValidate };
