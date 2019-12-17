import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-form-control',
    loadChildren: () => import('./custom-form-control/custom-form-control.module').then(m => m.CustomFormControlModule)
  },
  {
    path: 'players-chooser',
    loadChildren: () => import('./players-chooser/players-chooser.module').then(m => m.PlayersChooserModule)
  },
  {
    path: 'update-on',
    loadChildren: () => import('./update-on/update-on.module').then(m => m.UpdateOnModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
