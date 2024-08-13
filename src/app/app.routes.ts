import { Routes } from '@angular/router';

export const routes: Routes =
  [{
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(c => c.AboutMeComponent)
  },
  {
    path: 'repository',
    loadComponent: () => import('./repository/repository.component').then(c => c.RepositoryComponent)
  },
  {
    path: 'project-examples',
    loadComponent: () => import('./project-examples/project-examples.component').then(c => c.ProjectExamplesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: 'error-page',
    loadComponent: () => import('./error-page/error-page.component').then(c => c.ErrorPageComponent)
  },
  {
    path: '**',
    redirectTo: '/error-page', pathMatch: 'full'
  }];
