import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUser

    // Hack to save having to login every time I test
    constructor(){
        this.currentUser = {
            id: 1,
            userName: 'scottejames',
            firstName: 'Scott',
            lastName: 'James'
        }
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Scott',
            lastName: 'James'
        }
    }
    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
    isAuthenticated(){
        return !!this.currentUser
    }

}