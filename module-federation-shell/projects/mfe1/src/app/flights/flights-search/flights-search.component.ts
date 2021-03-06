import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from 'shared-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  user = this.service.user;

  constructor(private service: AuthLibService, private sharedService: SharedLibService) {
    console.log(this.sharedService);
  }

}
