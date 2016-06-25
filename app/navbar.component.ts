import {Component} from 'angular2/core';
import {RouterLink,Router} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navabr.component.html',    
    directives:[RouterLink]
})
export class NavbarComponent {   

    constructor(private _router:Router)
    {}

    isCurrentRoute(route)
    {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction); 
    } 
}