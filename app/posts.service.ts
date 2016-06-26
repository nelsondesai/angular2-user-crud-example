import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Users} from './Users';

import 'rxjs/add/operator/map';
@Injectable()
export class PostsService
{
    private _url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http)
    {

    }
    getPosts(filter?)
    {
        var url = this._url;
         if (filter && filter.userId)
            url += "?userId=" + filter.userId;
        return this._http.get(url).map(users => users.json());
    }
    getPost(postsId)
    {
        return this._http.get(this._url + "/" + postsId).map(res => res.json());
    }
    getComments(postId){
 		return this._http.get(this._url+ "/" + postId + "/comments").map(res => res.json());
 	} 
}