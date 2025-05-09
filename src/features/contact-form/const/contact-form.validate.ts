import { object, string } from "yup";

const MAX_VALUES_MESSAGE = 200;
const MAX_VALUES_NAME = 100;

export const contactFormSchema = object().shape({
  name: string()
    .max(MAX_VALUES_NAME, `Максимальное кол-во символов ${MAX_VALUES_NAME}`)
    .required("Поле обязательное"),
  email: string()
    .required("Поле обязательное")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Введите корректный Email"
    ),
  message: string()
    .max(
      MAX_VALUES_MESSAGE,
      `Максимальное кол-во символов ${MAX_VALUES_MESSAGE}`
    )
    .required("Поля обязательное"),
});

export interface IContactFormSchemaParams {
  name: string;
  email: string;
  message: string;
}
