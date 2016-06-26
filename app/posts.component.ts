import {Component, OnInit } from 'angular2/core';
import {PostsService} from './posts.service';
import {SpinnerComponent} from './spinner.component';
@Component({
    templateUrl: `app/posts.component.html`,
     styles: [`
         .posts li { cursor: default; }
         .posts li:hover { background: #ecf0f1; } 
         .list-group-item.active, 
         .list-group-item.active:hover, 
         .list-group-item.active:focus { 
             background-color: #ecf0f1;
             border-color: #ecf0f1; 
             color: #2c3e50;
         }
         .thumbnail {
            border-radius: 100%;
        } 
     `],
    providers:[PostsService],
    directives:[SpinnerComponent]
})
export class PostsComponent implements OnInit{    
    posts: any[];
    title= 'Posts';
    isLoading = true;
    commentsLoading;
    currentPost;
    constructor(private _postsServicee : PostsService)
    {
          
    }
    ngOnInit(){
        this._postsServicee.getPosts().subscribe(
            posts => this.posts = posts,
            null,
            ()=> { this.isLoading=false; });      
    }
    select(post){
 		this.currentPost = post; 
        this.commentsLoading = true;
        this._postsServicee.getComments(post.id)
 			.subscribe(comments => this.currentPost.comments = comments, null, () => this.commentsLoading = false); 
     }
      
}