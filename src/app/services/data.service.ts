import {Injectable} from '@angular/core';
import Problem from '../models/problem.model';
import {PROBLEMS} from '../mock.problem';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: Number): Problem {
    return PROBLEMS.find(problem => problem.id === id);
  }
}
