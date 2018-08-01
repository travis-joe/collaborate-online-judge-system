import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import Problem from '../../models/problem.model';
import {Router} from '@angular/router';
const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: ''
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  public difficulties: string[] = ['Easy', 'Medium', 'Hard', 'Super'];
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);

  @Output() add: EventEmitter<Problem> = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  addProblem() {
    this.add.emit(this.newProblem);
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }
}
