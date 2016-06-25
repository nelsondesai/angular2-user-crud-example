import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup,Validators} from 'angular2/common';

import {BasicValidators} from './basicValidators';
import {UserService} from './users.service';


@Component({
    templateUrl: 'app/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent {
    form : ControlGroup;
    constructor(fb:FormBuilder)
    {
        this.form = fb.group({
            name:['',Validators.required],
            email:['', BasicValidators.email],
            phone:[],
            address: fb.group({
                street:[],
                suite:[],
                city:[],
                zipcode:[],
            })
        });
    }
}