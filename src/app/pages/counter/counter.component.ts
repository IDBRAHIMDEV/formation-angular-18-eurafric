import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCount } from '../../store/counter/counter.selectors';
import { decrement, increment, reset } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  myCounter: number = 0
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getCount).subscribe({
      next: (res) => this.myCounter = res
    })
  }

  increase() {
    this.store.dispatch(increment())
  }

  decrease() {
    this.store.dispatch(decrement())
  }

  resetCounter() {
    this.store.dispatch(reset())
  }
 }
