import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { TechnologyComponent } from './pages/technology/technology.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'crew', component: CrewComponent},
    {path: 'destination', component: DestinationComponent},
    {path: 'technology', component: TechnologyComponent}
];
