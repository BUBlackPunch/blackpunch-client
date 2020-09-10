export { default } from './Header';

export interface NotiRowProps {
  key: number;
  isRead: boolean;
  text: string;
  date: string;
  link: string;
}

export interface NotiProps {
  data: Array<NotiRowProps>;
}
