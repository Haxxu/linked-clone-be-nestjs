import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/feed-post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/feed-post.interface';
import { from, Observable } from 'rxjs';
import { User } from '@modules/auth/models/user.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(user: User, feedPost: FeedPost): Observable<FeedPost> {
    feedPost.author = user;
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }

  findPosts(take: number, skip: number): Observable<FeedPost[]> {
    return from(
      this.feedPostRepository
        .findAndCount({ take, skip })
        .then(([posts, count]) => {
          return <FeedPost[]>posts;
        }),
    );
  }
}
