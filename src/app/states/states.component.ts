import { log } from 'util';
import { Observable, Subject } from 'rxjs/Rx';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit, OnChanges, OnDestroy {

  @Input() presidentSpeech: string;
  @Input() selectedState: string | any = '';

  stateSubject: Subject<any> = new Subject<any>();
  stateObservable: Observable<any> = this.stateSubject.asObservable();

  stateChanges: Array<any> = [];

  constructor() {
    console.log(`Variable is: ${this.presidentSpeech} inside constructor`);
   }

  ngOnChanges(change: SimpleChanges) {
    const currentValue = change['selectedState'].currentValue;
    const isObject = typeof currentValue === 'object';
    const hasKeys = Object.keys(currentValue).length > 0;

    if (isObject && hasKeys) {
      this.selectedState = currentValue.stateName;
    }

    this.stateSubject.next(this.selectedState);
  }

  ngOnDestroy() {
    console.log('will unsubscribe');
    this.stateSubject.unsubscribe();
  }

  ngOnInit() {

    this.stateObservable
    .subscribe(
      value => {
        this.stateChanges.push(value);
    });

    console.log(`Variable value: ${this.presidentSpeech} inside ngOnInit`);
  }

}
