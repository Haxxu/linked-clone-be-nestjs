import { FeedPost } from '@modules/feed/models/feed-post.interface';
import { Role } from './role.enum';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
  feedPosts?: FeedPost[];
  createdAt?: Date;
  updatedAt?: Date;
}
