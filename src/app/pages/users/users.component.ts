import { Userv2 } from './../../models/user';
import { User } from '../../models/user';
import { GithubService } from './../../services/github.service';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: Userv2[] = []
  githubService = inject(GithubService)

  ngOnInit(): void {
      this.githubService.getUsers().subscribe({
        next: (res) => {
          this.users = res
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
