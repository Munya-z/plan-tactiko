import { RoutinesComponent } from './components/routines/routines.component';
import { IntroComponent } from './components/intro/intro.component';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { TodayComponent } from './components/today/today.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'todos', component: TodayComponent },
  { path: 'projects', component: ViewProjectsComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: 'routines',
    component: RoutinesComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
