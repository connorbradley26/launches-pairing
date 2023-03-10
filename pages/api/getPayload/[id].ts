import { NextApiRequest, NextApiResponse } from 'next';
import { IPayload } from '../../../types/IPayload';
import { IPayloadResponse } from '../../../types/IPayloadResponse';

export default async function handler(req: NextApiRequest, res: NextApiResponse<IPayload>) {
  const { id } = req.query as { id: string };

  // v5 doesn't exist yet, so we'll use v4
  const response = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`);
  const payload: IPayloadResponse = await response.json();

  const payloadData: IPayload = {
    id: id,
    type: payload.type,
  };

  res.status(200).json(payloadData);
}
