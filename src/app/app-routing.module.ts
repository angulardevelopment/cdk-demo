import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DevKitFeaturesComponent } from './component-dev-kit-features/component-dev-kit-features.component';


const routes: Routes = [{
  path:'DevKitFeaturesComponent',
  component: DevKitFeaturesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
