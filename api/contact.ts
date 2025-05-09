import type { VercelResponse } from '@vercel/node';

export default async function handler(
  res: VercelResponse
) {
  return res.status(200).json({ 
    message: `Thank you, We received your message.`,
    success: true
  });
}