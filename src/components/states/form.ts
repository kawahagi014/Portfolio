import { atom } from 'recoil';

export const nameAtom = atom<string>({
  key: 'nameAtom',
  default: '',
});

export const emailAtom = atom<string>({
  key: 'emailAtom',
  default: '',
});

export const subjectAtom = atom<string>({
  key: 'subjectAtom',
  default: '',
});

export const messageAtom = atom<string>({
  key: 'messageAtom',
  default: '',
});
