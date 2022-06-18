import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { init, send } from 'emailjs-com';

import { nameAtom, emailAtom, subjectAtom, messageAtom } from '../states/form';
import { useMessage } from './useToast';

export const useSendMail = () => {
  const { showMessage } = useMessage();

  const userID = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const nameState = useRecoilValue(nameAtom);
  const emailState = useRecoilValue(emailAtom);
  const subjectState = useRecoilValue(subjectAtom);
  const messageState = useRecoilValue(messageAtom);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);

  const sendMail = useCallback(() => {
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);
      const templateParam = {
        to_name: nameState,
        to_email: emailState,
        subject: subjectState,
        message: messageState,
      };

      send(serviceID, templateID, templateParam)
        .then(() => {
          showMessage({ title: 'お問合せを送信しました', status: 'success' });
          setSendSuccess(true);
        })
        .catch(() => {
          showMessage({
            title: 'お問合せの送信に失敗しました',
            status: 'error',
          });
          setSendSuccess(false);
        })
        .finally(() => sendSuccess);
    }
  }, [nameState, emailState, subjectState, messageState]);

  return { sendMail, sendSuccess };
};
