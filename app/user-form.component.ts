import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup,Validators} from 'angular2/common';
import {CanDeactivate} from 'angular2/router';
import {BasicValidators} from './basicValidators';
import {UserService} from './users.service';


@Component({
    templateUrl: 'app/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent implements CanDeactivate {
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
    routerCanDeactivate()
    {
        console.log(this.form.dirty);
        if(this.form.dirty){
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
    }
}