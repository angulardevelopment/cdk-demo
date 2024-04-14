import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevKitFeaturesComponent } from './component-dev-kit-features/component-dev-kit-features.component';

@NgModule({
  declarations: [
    AppComponent,
    DevKitFeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A11yModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
