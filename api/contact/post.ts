import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { IFormContact } from '../../src/features/contact-form/ui/contact-from';


export interface IResponseForm {
  message: string, 
  success: boolean
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Явная проверка типа тела запроса
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const { name, email, message } = req.body as IFormContact;
    
    // Валидация обязательных полей
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Received form data:', { name, email, message });
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return res.status(200).json({ 
      message: `Thank you for your interest, ${name}!`,
      success: true
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : error
    });
  }
}