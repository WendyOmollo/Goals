import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ Goal} from '../goal';
import { GoalService } from '../goal-serveice/goal.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
@Input() goal:Goal;
@Output() isComplete = new EventEmitter < boolean >();

goalDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
