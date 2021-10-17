import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('navigation')
  navigation!: ElementRef;

  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log("OnInit", this.navigation.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit", this.navigation.nativeElement);
  }


}
