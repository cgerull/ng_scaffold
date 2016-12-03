// app.router.ts
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import { JServComponent} from './services/jserv.component';

// Define routes
export const routes: Routes = [
  {
    path :'',   // index page
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ip', component: JServComponent }
];

// Export routing component
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);