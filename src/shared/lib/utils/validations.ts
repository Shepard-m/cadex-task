import { type AnyObject, type ObjectSchema } from "yup";

type ValidationSchemaType<T extends AnyObject> = ObjectSchema<
  T,
  AnyObject,
  unknown,
  ""
>;

type ValidationResult<T extends AnyObject> = {
  isValid: boolean;
  errors: Partial<Record<keyof T, string>> | null;
};

interface YupValidationError {
  inner: Array<{
    path: string;
    message: string;
  }>;
}

const getValidationError = async <T extends AnyObject>(
  schema: ValidationSchemaType<T>,
  data: T
): Promise<Partial<Record<keyof T, string>>> => {
  const errorMessages: Partial<Record<keyof T, string>> = {};

  try {
    await schema.validate(data, { abortEarly: false });
  } catch (err) {
    const validationError = err as YupValidationError;
    validationError.inner.forEach((e) => {
      const fieldName = e.path as keyof T;
      if (!errorMessages[fieldName]) {
        errorMessages[fieldName] = e.message;
      }
    });
  }

  return errorMessages;
};

export const validate = async <T extends AnyObject>(
  values: T,
  schema: ValidationSchemaType<T>
): Promise<ValidationResult<T>> => {
  const formErrors = await getValidationError(schema, values);
  const hasErrors = Object.keys(formErrors).length > 0;

  return {
    isValid: !hasErrors,
    errors: hasErrors ? formErrors : null,
  };
};