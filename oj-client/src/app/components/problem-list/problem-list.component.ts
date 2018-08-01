import {Component, Inject, OnInit} from '@angular/core';
import Problem from '../../models/problem.model';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  sub: Subscription;
  constructor(@Inject('data') private data) {
  }

  ngOnInit() {
    this.getProblems();
  }
  getProblems(): void {
    this.sub = this.data.getProblems()
      .subscribe(problems => this.problems = problems);
  }
  addProblem(newProblem): void {
    this.data.addProblem(newProblem)
      .subscribe(problem => {
        this.problems.push(problem);
      });
  }
}
