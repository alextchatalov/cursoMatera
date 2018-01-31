import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import { isUndefined } from "ionic-angular/util/util";
import { uri } from "../utils/constants";

@Injectable()
export class AuthServiceProvider {

    currentUser: Object;

    constructor(public http: HttpClient,
                private store: Storage) {}

    public login(credentials) {
        if(credentials.login === null || credentials.senha === null) {
            return Observable.throw("Please inser credentials");
        } else {
            return Observable.create (observer => {
                let acess: Boolean;
                this.http.get(`${uri}/usuario?login${
                                                    credentials.login
                                                    }&senha=${
                                                    credentials.senha
                }`
            )                 
            .subscribe( res => {
                if(res[0]) {
                    this.currentUser = res[0];
                    acess = true;
                    localStorage.setItem("token","OK");
                    this.store.set("currentUser", this.currentUser);
                } else {
                    acess = false;
                }
                if(!isUndefined(acess)) {
                    observer.next(acess);
                    observer.complete();
                }
            }) 
            });
        }
    }                
}