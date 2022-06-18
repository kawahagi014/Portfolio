import { FC, memo, useEffect, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';
import { UseFormReset } from 'react-hook-form';

import { Inputs } from '../../types/inputs';
import { useSendMail } from '../hooks/useSendMail';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  reset: UseFormReset<Inputs>;
};

export const AlertDaialog: FC<Props> = memo((props) => {
  const { isOpen, onClose, reset } = props;
  const { sendMail, sendSuccess } = useSendMail();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const sendClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    sendMail();
    onClose();
  };

  useEffect(() => {
    if (sendSuccess) {
      reset();
    }
  }, [sendSuccess]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay color="blue.800">
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            お問合せ送信確認
          </AlertDialogHeader>
          <AlertDialogBody>
            お問合せを送信してもよろしいですか？
            <br />
            ※メールアドレスに誤りがあると、お返事ができません。
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              戻る
            </Button>
            <Button colorScheme="blue" onClick={sendClose} ml={3}>
              送信
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});
