import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
    getGoals(){
      return [
        new Goal (1, 'Watch finding Nemo','Find an online version and watch merlin find his son',new Date(2019,3,14)),
        new Goal (2,'Buy cookies','I have to by cookies for the parrot',new Date(2019,6,9)),
        new Goal (3,'Get new phone case','Diana has her birthday coming up soon',new Date(2019,1,12)),
        new Goal (4,'Get dog food','Pupper likes expensive snacks',new Date(2019,0,18)),
        new Goal (5,'Solve math homework','Damn Math',new Date(2019,2,14)),
        new Goal (6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,12,14)),
       ];
    }
    getGoal(id){
      for (let goal of this.getGoals( )){
        if (goal.id == id){
          return goal;
        }
      }
    }
    constructor() { }
  }