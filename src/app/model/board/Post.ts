import { User } from '../myinfo/User';

export interface Post {
  postId: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  user: User;
}
