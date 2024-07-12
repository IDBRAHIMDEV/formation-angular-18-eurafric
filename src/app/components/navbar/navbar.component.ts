import { Store } from '@ngrx/store';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { getCount } from '../../store/counter/counter.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { getAppToken } from '../../store/users/users.selectors';

@Component({ 
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  count$!: Observable<number>
  isAuth: boolean = false
  store = inject(Store)

  ngOnInit(): void {
    this.count$ = this.store.select(getCount)
    this.store.select(getAppToken).subscribe({
      next: res => {
        this.isAuth = !!res
      }
    })
  }
}
