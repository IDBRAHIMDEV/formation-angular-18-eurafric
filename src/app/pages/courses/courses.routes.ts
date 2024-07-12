import { Routes } from "@angular/router";
import { MainCoursesComponent } from "./main-courses/main-courses.component";
import { ListCoursesComponent } from "./list-courses/list-courses.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { ShowCourseComponent } from "./show-course/show-course.component";
import { authGuard } from "../../guards/auth.guard";

export const courseRoutes: Routes = [
    {
        path: 'elearning',
        component: MainCoursesComponent,
        canActivate: [authGuard],
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
    }
]