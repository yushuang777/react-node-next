import md5 from 'md5';
import { encode } from 'js-base64';
import { NextApiRequest, NextApiResponse } from 'next';
import request from 'service/fetch';
import { format } from 'date-fns';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config';
import { ISession } from './index';

export default withIronSessionApiRoute(sendVerifyCode,  ironOptions );
async function sendVerifyCode(req: NextApiRequest, res: NextApiResponse) {
  const session: ISession = req.session;
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

  console.log(response)
  const { statusCode, templateSMS,statusMsg } = response as any;
  if (statusCode === '000000') {
    session.verifyCode = verifyCode;
    await session.save();
    res.status(200).json({
      code: statusCode,
      msg: statusMsg,
      data:{
        templateSMS
      }
    });
  }else{
    res.status(200).json({
      code: statusCode,
      msg: statusMsg,
    });
  }
}
