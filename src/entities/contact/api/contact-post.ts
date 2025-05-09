import type { IFormContact } from "../../../features/contact-form/ui/contact-from";
import { sendMockForm } from "../mock/send-mock-form";

export const contactPost = async(form: IFormContact) => {
  const { message } = await sendMockForm(false, form);

  return message;
}
