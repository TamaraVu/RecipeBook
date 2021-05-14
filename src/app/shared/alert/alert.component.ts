import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  // tslint:disable-next-line:typedef
  onClose() {
    this.close.emit();
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
