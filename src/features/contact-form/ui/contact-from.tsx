import { useState, type FormEvent, } from 'react';
import { 
  type BoxProps,
  InputLabel,
} from '@mui/material';
import { ContactContainerForm, ContactContainerRow, ContactFormButton, ContactFormInput } from './contact-from.style';
import { contactFormSchema } from '../const/contact-form.validate';
import { validate } from '../../../shared/lib/utils/validations';

interface IContactFromProps extends BoxProps {
  onSubmitForm?: () => void;
}

interface IFormContact {
  name: string;
  email: string;
  message: string;
}

export const ContactFrom = ({ onSubmitForm, ...props }: IContactFromProps) => {
  const [form, setForm] = useState<IFormContact>({
    name: "",
    email: "",
    message: ""
  })
  const [errorName, setErrorName] = useState<string | null>(null);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const disabled = isLoading || Boolean(errorName || errorEmail || errorMessage);

  const handleSubmitForm = async(evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    
    const resultsValidationForm = await validate(form, contactFormSchema);

    if (!resultsValidationForm.isValid) {
      const error = resultsValidationForm.errors;
      setErrorName(error?.name || null);
      setErrorEmail(error?.email || null);
      setErrorMessage(error?.message || null);

      return;
    }
  }

  const handleInputNameChange = (value: string) => {
    setForm({...form, name: value});

    setErrorName(null);
  }

  const handleInputEmailChange = (value: string) => {
    setForm({...form, email: value});

    setErrorEmail(null);
  }

  const handleInputMessageChange = (value: string) => {
    setForm({...form, message: value});

    setErrorMessage(null);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <ContactContainerForm sx={{...props}}>
        <ContactContainerRow>
          <InputLabel htmlFor="name">Name</InputLabel>
          <ContactFormInput 
            id="name"
            variant="outlined"
            fullWidth
            value={form.name}
            helperText={errorName}
            onChange={(evt) => handleInputNameChange(evt.target.value)}
          />
        </ContactContainerRow>
        <ContactContainerRow>
          <InputLabel htmlFor="Email">Email</InputLabel>
          <ContactFormInput 
            id="Email"
            value={form.email}
            fullWidth
            variant="outlined"
            helperText={errorEmail}
            onChange={(evt) => handleInputEmailChange(evt.target.value)}
          />
        </ContactContainerRow>
        <ContactContainerRow>
          <InputLabel htmlFor="Message">Message</InputLabel>
          <ContactFormInput 
            id="Message"
            value={form.message}
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            helperText={errorMessage}
            onChange={(evt) => handleInputMessageChange(evt.target.value)}
          />
        </ContactContainerRow>

        <ContactFormButton type="submit" disabled={disabled}>
          Submit
        </ContactFormButton>
      </ContactContainerForm>
    </form>
 );
}
