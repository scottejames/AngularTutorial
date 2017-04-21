import {Component} from '@angular/core'
import {AuthService} from './auth.service'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}           
        `]
})
export class LoginComponent {
    constructor(private authService: AuthService) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        console.log(formValues)
    }
}