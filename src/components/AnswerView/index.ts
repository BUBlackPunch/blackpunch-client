export interface CommentProps {
  id?: number;
  user: string;
  date: string;
  content: string;
}

export interface AnswerProps {
  id?: number;
  // writer: string;
  name: string;
  date: string;
  like: number;
  content: string;
  comments?: CommentProps[];
}

export { default } from './AnswerView';
