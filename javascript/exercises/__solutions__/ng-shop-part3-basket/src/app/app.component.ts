// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceBus } from './serviceBus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  errorMessage = '';

  constructor(private serviceBus: ServiceBus) {}

  public ngOnInit(): void {
    this.serviceBus.listen('ERROR').subscribe((error) => {
      this.errorMessage = error.message;
    });
  }
}
