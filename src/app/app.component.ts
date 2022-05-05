import { Component, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

// Make the App Responsive
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  @ViewChild('snav', { static: true }) private snav: ElementRef;
  title: string;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener;

  constructor(public router: Router, public location: Location, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, update: SwUpdate) {
    this.snav = {} as ElementRef;
    this.title = 'Rhinocyt';
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    update.available.subscribe(event => {
      update.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSnav(): void {
    if(this.snav) (this.snav as any).close();
  }

}
