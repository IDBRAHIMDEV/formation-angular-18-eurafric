import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';
import { UsersComponent } from './pages/users/users.component';
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
        loadComponent: () => import('./pages/users/users.component').then(c => c.UsersComponent)
    },
    {
        path: 'store',
        loadChildren: () => import('./pages/courses/courses.routes').then((m) => m.courseRoutes)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
