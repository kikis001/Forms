import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveComponent } from '../app/pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
    {path:'template', component: TemplateComponent},
    {path:'reactive', component: ReactiveComponent},
    {path: '**', pathMatch:'full', redirectTo: 'template'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }