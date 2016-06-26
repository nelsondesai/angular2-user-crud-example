import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Users} from './Users';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService
{
    private _url = 'http://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http)
    {

    }
    getUsers()
    {
        return this._http.get(this._url).map(users => users.json());
    }
    addUser(users)
    {
        return this._http.post(this._url, JSON.stringify(users)).map(users => users.json());
    }
    getUser(userId)
    {
        return this._http.get(this._url + "/" + userId).map(res => res.json());
    }
    updateUser(user)
    {
        return this._http.put(this._url + "/" + user.id,JSON.stringify(user)).map(res => res.json());
    }
}