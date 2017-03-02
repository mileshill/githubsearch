import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private userName: string;
  private clientId = '1a85074041e83f906f75';
  private clientSecret = 'ab86dc4e24f90ea156897a0d126fcb514dc7602d';

  constructor(private _http: Http) { 
    console.log('github service ready');
    this.userName = 'mileshill';
}

getUser(){
  return this._http.get('https://api.github.com/users/'+this.userName+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
    .map(res => res.json());
}

getRepos(){
  return this._http.get('https://api.github.com/users/'+this.userName+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
    .map(res => res.json());
}

updateUser(userName: string){
  this.userName = userName;
}

}
