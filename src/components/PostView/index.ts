export { default } from './PostView';

export type TagColor =
  | 'automatic'
  | 'neutral'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'purple'
  | undefined;

export interface Post {
  id: number;
  title: string;
  category: { name: string; color: string };
  tags: { id: number; name: string; color: TagColor }[];
  like: number;
  user: { name: string; profile: string | null };
  hasImage?: boolean;
  createdAt: string;
  content: string;
  // date: string;
}
