import { Component, OnInit, OnChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Table Bash';
  timer: any;
  timeRemaining = 5;
  currentSum: string;
  model = { answer: '' };


  constructor() {}
    ngOnInit() {
      this.reset();
    }

    reset() {
      this.timeRemaining = 5;
      this.timer = setInterval(() => this.updateTime(), 1000);
      this.nextSum();
    }

    onSubmit() {
      console.log('submitted');
    }

    private updateTime() {
      console.log('here');
      if (this.timeRemaining >= 0) {
        this.timeRemaining--;
      } else {
        this.timeRemaining = -1;
        clearInterval(this.timer);
      }
    }

    private nextSum() {
      const min = 1;
      const max = 12;
      const b = Math.floor(Math.random() * (max - min) + min);
      this.currentSum = `3 x ${b}`;
    }


}
