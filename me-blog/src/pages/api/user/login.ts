import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config';

export default withIronSessionApiRoute(login, ironOptions);
async function login(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber, vcCode } = req.body;
  res.status(200).json({
    phoneNumber,
    vcCode,
  });
}
