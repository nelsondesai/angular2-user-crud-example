import {Component, OnInit} from 'angular2/core';
import {UserService} from './users.service';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent {
    
}