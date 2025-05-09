import type { IFormContact } from "../../../features/contact-form/ui/contact-from";

export const sendMockForm= async (isError: boolean = false, data: IFormContact) => {
  return new Promise<{ message: string }>((res, rej) => {
    setTimeout(() => {
      if (!isError) {
        res({ message: `Thank you for your interest, ${data.name}" ` });
      } else {
        rej(new Error("Invalid request"));
      }
    }, 2000);
  });
};
