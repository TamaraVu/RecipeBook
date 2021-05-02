import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  // tslint:disable-next-line:typedef
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  // tslint:disable-next-line:typedef
  onLogout() {
    this.authService.logout();

  }

  ngOnInit(): void {
    this.userSub = this.authService.user
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
