import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

export const ROUTE: Routes = [
   { path: '', redirectTo: 'users', pathMatch: 'full'},
   { path: 'users', component: UsersComponent},
   { path: 'new-user', component: UserFormComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTE);

