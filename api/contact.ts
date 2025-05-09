import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface IFormContact {
  name: string;
  email: string;
  message: string;
}

export interface IResponseForm {
  message: string, 
  success: boolean
}

export default async function POST(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields 400' });
      }

      return res.json({ 
        message: `Thank you for your interest, ${name}`,
        success: true
      });
    } catch {
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}