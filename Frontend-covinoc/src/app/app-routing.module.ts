import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Customer/list/list.component';
import { SaveComponent } from './Customer/save/save.component';
import { UpdateComponent } from './Customer/update/update.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'save', component: SaveComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
