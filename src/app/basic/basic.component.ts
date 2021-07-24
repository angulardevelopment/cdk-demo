import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  color = '#fff';
  public defaultColors: string[] = ['red', 'green'];

  constructor(private liveAnnouncer: LiveAnnouncer) { }

  public changeColor(color: string): void {
    this.liveAnnouncer.announce(`Select color: ${color}`, 'assertive');
  }

}
