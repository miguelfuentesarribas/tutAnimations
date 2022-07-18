import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    

    trigger( 'divState', [
      state('normal',style({
        'background-color': 'red',
        transform: 'translateX(0px)'
      })),
      state('highlited',style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlited', animate(300)),
      transition('highlited => normal', animate(800)),
    ]),

    trigger( 'wildState', [
      state('normal',style({
        'background-color': 'red',
        transform: 'translateX(0px) scale(1)'
      })),
      state('highlited',style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken',style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      
      transition('normal => highlited', animate(300)),
      transition('highlited => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])

    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.wildState == 'normal' ? this.wildState = 'highlited': this.wildState = 'normal';
    this.state == 'normal' ? this.state = 'highlited': this.state = 'normal';
  }

  onShrink (){
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }
}
