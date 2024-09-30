import { Body, Controller, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/feed-post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() post: FeedPost): Observable<FeedPost> {
    console.log('hello');

    return this.feedService.createPost(post);
  }
}
