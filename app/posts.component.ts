import {Component, OnInit } from 'angular2/core';
import {PostsService} from './posts.service';
import {UserService} from './users.service';
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
    providers:[PostsService, UserService],
    directives:[SpinnerComponent]
})
export class PostsComponent implements OnInit{    
    posts: any[];
    users: any[];
    title= 'Posts';
    postsLoading = true;
    commentsLoading;
    currentPost;
    constructor(private _postsServicee : PostsService, private _userService : UserService )
    {
          
    }
    ngOnInit(){
        this.loadUsers();  
        this.loadPosts();   
    }
    select(post){
 		this.currentPost = post; 
        this.commentsLoading = true;
        this._postsServicee.getComments(post.id)
 			.subscribe(comments => this.currentPost.comments = comments, null, () => this.commentsLoading = false); 
     }
     private loadUsers()
     {
            this._userService.getUsers().subscribe(users => this.users = users);
     }
     private loadPosts(filter?)
     {
            this.postsLoading = true; 
            this._postsServicee.getPosts(filter).subscribe(
                posts => this.posts = posts,
                null,
                ()=> { this.postsLoading=false; });  
     }
     reloadPosts(filter)
     {
         this.currentPost = null;
         this.loadPosts(filter);  
     }
      
}