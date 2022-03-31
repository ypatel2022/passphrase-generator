// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import diceware from '../../diceware.json'

export default function handler(req: NextApiRequest, res: any) {
  res.json(diceware)
}
