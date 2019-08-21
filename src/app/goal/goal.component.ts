import { Component, OnInit } from '@angular/core';
import { Goal} from '../goal';
import { GoalService } from '../goal-serveice/goal.service';
import { AlertService} from '../alert-service/alert.service';
import { Quote} from '../quote-class/quote';
import { HttpClient} from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  goals:Goal[];
  quote:Quote;
  alertService:AlertService;
  // private _router: Router;
  
  // public get router(): Router {
  //   return this._router;
  // }
  // public set router(value: Router) {
  //   this._router = value;
  // }

  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index ,1);
        this.alertService.alertMe("Goal has been deleted")
      }
      
    
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor( goalServeice:GoalService,alertService:AlertService,private http:HttpClient, private quoteService:QuoteRequestService, private router:Router) { 
    this.goals = goalServeice.getGoals();
    this.alertService = alertService;
  }

  ngOnInit() {
    
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
  
}


