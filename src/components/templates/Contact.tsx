/** @jsxImportSource @emotion/react */
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
  Textarea,
  FormErrorMessage,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSetRecoilState } from "recoil";
import yup from "../../utils/yup-custom-validation";
import { AlertDaialog } from "../atoms/AlertDaialog";
import { nameAtom, emailAtom, subjectAtom, messageAtom } from "../states/form";
import { Inputs } from "../../types/inputs";

export const Contact: FC = memo(() => {
  const refForm = useRef<HTMLFormElement | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const nameState = useSetRecoilState(nameAtom);
  const emailState = useSetRecoilState(emailAtom);
  const subjectState = useSetRecoilState(subjectAtom);
  const messageState = useSetRecoilState(messageAtom);

  const schema = yup.object().shape({
    name: yup.string().label("名前").max(60).required(),
    email: yup.string().label("メールアドレス").max(256).email().required(),
    subject: yup.string().label("お問合せの表題").max(100).required(),
    message: yup.string().label("お問合せの内容").max(1000).required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    nameState(data.name);
    emailState(data.email);
    subjectState(data.subject);
    messageState(data.message);
    onOpen();
  };

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form ref={refForm} onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" {...register("name")} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" {...register("email")} />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.subject}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input id="subject" type="text" {...register("subject")} />
            <FormErrorMessage>
              {errors.subject && errors.subject.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" {...register("message")} />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Box textAlign="center">
            <Button type="submit" size="sm" color="blue.800" cursor="pointer">
              Send
            </Button>
          </Box>
        </Stack>
      </form>
      <AlertDaialog isOpen={isOpen} onClose={onClose} reset={reset} />
    </>
  );
});
