import md5 from 'md5';
import { encode } from 'js-base64';
import { NextApiRequest, NextApiResponse } from 'next';
import request from 'service/fetch';
import { format } from 'date-fns';
export default async function sendVerifyCode(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { to = '', templateId = '1' } = req.body;
  const AppId = '2c94811c946f6bfb0194b28b254d0562';
  const AccountId = '2c94811c946f6bfb0194b28b23a1055b';
  const Authtoken = 'd83250d8244345d895d6d55079798683';
  const NowData = format(new Date(), 'yyyyMMddHHmmss');
  const SigParameter = md5(`${AccountId}${Authtoken}${NowData}`);
  const Authorization = encode(`${AccountId}:${NowData}`);
  const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}`;
  const verifyCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  const expireMinute = '5';
  const response = await request.post(
    url,
    {
      to,
      templateId,
      appId: AppId,
      datas: [verifyCode, expireMinute],
    },
    { headers: { Authorization } }
  );

  console.log(response);
  res.status(200).json({
    code: 0,
    data: 123,
  });
}
