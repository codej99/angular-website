import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner-overlay',
  templateUrl: './loading-spinner-overlay.component.html',
  styleUrls: ['./loading-spinner-overlay.component.css']
})
export class LoadingSpinnerOverlayComponent implements OnInit {

  showSpinner:boolean = true;
  @Input() public message: string;
  constructor() {}

  public ngOnInit() {}

}
