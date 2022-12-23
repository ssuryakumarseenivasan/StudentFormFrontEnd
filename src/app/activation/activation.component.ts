import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../appservice.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  result : any;
  email : any;
  constructor(private appservice:AppServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.result = this.route.snapshot.queryParams;
    this.verifyuser();
    
  }

  verifyuser(){
    this.appservice.verifyuser(this.result).subscribe({
      next:() => {
        this.router.navigate(["login"]);
      }
    })
  }
}
