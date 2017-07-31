import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms', style({
        transform: 'translateY(40px)'
      }))),
    ]),
  ]
})
export class AnimationsComponent implements OnInit {

  stateAnimation: string = 'small';
  constructor() {}

  animateMe() {
    this.stateAnimation = (this.stateAnimation === 'small' ? 'large' : 'small');
  }

  ngOnInit() {

  }

}
