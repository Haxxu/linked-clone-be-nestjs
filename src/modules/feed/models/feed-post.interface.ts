import { User } from '@modules/auth/models/user.interface';

export interface FeedPost {
  id?: number;
  body?: string;
  author?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
