import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-dev-kit-features',
  templateUrl: './component-dev-kit-features.component.html',
  styleUrls: ['./component-dev-kit-features.component.scss']
})
export class DevKitFeaturesComponent {

  color = '#fff';
  public defaultColors: string[] = ['red', 'green'];

  constructor(private liveAnnouncer: LiveAnnouncer) { }

  public changeColor(color: string): void {
    this.liveAnnouncer.announce(`Select color: ${color}`, 'assertive');
  }

}
