import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';
import { UsersComponent } from './pages/users/users.component';
import { ListCoursesComponent } from './pages/courses/list-courses/list-courses.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'comptabilite',
        component: ComptabiliteComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'elearning',
        component: ListCoursesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
