// app.router.ts
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';

// Define routes
export const routes: Routes = [
  {
    path :'',   // index page
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent }
];

// Export routing component
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);