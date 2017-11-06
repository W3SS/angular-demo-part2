import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretSentence = '';

  selectedState: any = 'Click button to select random state';

  showStates = true;

  public rollState(): any {
    if (Math.random() >= 0.5) {
      this.selectedState = 'West Virginia';
    } else {
      this.selectedState =  {stateName: 'California'};
    }
  }

  public getPoliticianName(): string {
    return 'Abraham Lincoln';
  }

}
