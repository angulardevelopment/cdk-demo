import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TOUCH_BUFFER_MS
import { A11yModule } from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevKitFeaturesComponent } from './component-dev-kit-features/component-dev-kit-features.component';

@NgModule({
  declarations: [
    AppComponent,
    DevKitFeaturesComponent
  ],
  imports: [
    AppRoutingModule,
    A11yModule,
    DragDropModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
