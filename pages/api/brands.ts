// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../mocks/brand/brand_all.json'

type Data = {
   data: { id: string; name: string; img: string; }[]; 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'GET'){
    res.status(200).json(data);
  }

  
}
