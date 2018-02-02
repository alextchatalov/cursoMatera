import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import { isUndefined } from "ionic-angular/util/util";
import { uri } from "../utils/constants";
import { TokenStorage } from "../../providers/auth-service/token-storage-service";

@Injectable()
export class AuthServiceProvider {

    currentUser: Object;

    constructor(public http: HttpClient,
                private store: Storage,
                private tokenStorage: TokenStorage) { }


    public isAuthorized() {
        const token = this.tokenStorage.getAccessToken();
        return token ? true : false;
    }

    public getAcessToken() {
        return `Bearer ${this.tokenStorage.getAccessToken()}`;
    }
    public buildToken(credentials) {
        // regra de criação
        const token = btoa(`mobile:alunos`);
        return token;
        // return "bW9iaWx10mFsdW5vcw==";
    }

    public login(credentials): Observable<any> {
        const user = this.buildToken(credentials);

        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${user}`
            })
        };
        const params = new HttpParams()
            .set("username", credentials.login)
            .append("password", credentials.senha)
            .append("grant_type", "password");
        
        return this.http.post(`${uri}/oauth/token`, params.toString(), httpOptions);
    }

    saveAcessData({ access_token }) {
        this.tokenStorage.setAccessToken(access_token);
    }

    public logout(): void {
        this.tokenStorage.clear();
        location.reload(true);
    }
}