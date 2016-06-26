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
    getPosts()
    {
        return this._http.get(this._url).map(users => users.json());
    }
    addPosts(users)
    {
        return this._http.post(this._url, JSON.stringify(users)).map(users => users.json());
    }
    getPost(postsId)
    {
        return this._http.get(this._url + "/" + postsId).map(res => res.json());
    }
    updatePosts(user)
    {
        return this._http.put(this._url + "/" + user.id,JSON.stringify(user)).map(res => res.json());
    }
    deletePosts(postsId)
    {
        return this._http.delete(this._url + "/" + postsId).map(res => res.json());
    }
}