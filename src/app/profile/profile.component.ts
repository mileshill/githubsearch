import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  userName: string;
  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  ngOnInit() {
  }

  searchUser(){
    this._githubService.updateUser(this.userName);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    

    if (this.user){
      this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
    }
  }

}
