
 import { HttpClient } from '@angular/common/http'
 import {Observable} from 'rxjs'
 import { map } from 'rxjs/operators'
 import { Injectable } from '@angular/core';

 @Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getUser(username: string) : Observable<any>{
        return this.http.get('https://api.github.com/users/'+username+'?client_id=3433e8d81aebd677234c&client_secret=395317dc8112af718c43f5e6d57ca2ea8b9e0233')
        .pipe(map(
            function(response:Response) {
                return response;
            }
        )
)

    }
}