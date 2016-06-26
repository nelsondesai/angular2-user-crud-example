import {Component, OnInit } from 'angular2/core';
import {PostsService} from './posts.service';
import {SpinnerComponent} from './spinner.component';
@Component({
    templateUrl: `app/posts.component.html`,
    providers:[PostsService],
    directives:[SpinnerComponent]
})
export class PostsComponent implements OnInit{    

    PostsService
    posts: any[];
    title= 'Posts';
    isLoading = true;
    constructor(private _postsServicee : PostsService)
    {
          
    }
    ngOnInit(){
        this._postsServicee.getPosts().subscribe(
            posts => this.posts = posts,
            null,
            ()=> { this.isLoading=false; });      
    }    
}