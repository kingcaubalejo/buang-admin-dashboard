import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('navigation', { static: false })
  navigation!: ElementRef;

  checkedElement: Subscription = new Subscription();

  featureEnable: boolean = environment.featureEnable;
  constructor() { }

  ngOnInit(): void {
    console.log("OnInit", this.navigation.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit", this.navigation.nativeElement);
    this.checkedElement = fromEvent(this.navigation.nativeElement, 'click')
      .subscribe(() => {
        console.log('element clicked: ', this.navigation.nativeElement);
      });
  }
  
  ngOnDestroy(): void {
    this.checkedElement.unsubscribe();
  }


}
