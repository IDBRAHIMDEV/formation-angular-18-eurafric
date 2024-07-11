import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';
import { UsersComponent } from './pages/users/users.component';
import { ListCoursesComponent } from './pages/courses/list-courses/list-courses.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddCourseComponent } from './pages/courses/add-course/add-course.component';
import { EditCourseComponent } from './pages/courses/edit-course/edit-course.component';
import { ShowCourseComponent } from './pages/courses/show-course/show-course.component';
import { MainCoursesComponent } from './pages/courses/main-courses/main-courses.component';

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
        component: MainCoursesComponent,
        children: [
            {
                path: 'list',
                component: ListCoursesComponent
            },
            {
                path: 'create',
                component: AddCourseComponent
            },
            {
                path: 'edit/:id',
                component: EditCourseComponent
            },
            {
                path: ':id',
                component: ShowCourseComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
