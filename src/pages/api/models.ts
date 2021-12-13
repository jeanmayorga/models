import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseApi';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await supabase.from('models').select('*');

  res.status(200).json({ data });
};
