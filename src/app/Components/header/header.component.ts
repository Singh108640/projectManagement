import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private profileService:ProfileServiceService , private route:Router){

  }
  SearchProject(){

  }
  getAllProjects(){
      this.route.navigateByUrl("/home");
  }
  Movetodashboard(){
    this.route.navigateByUrl("/dashboard")
  }
  MovetoChart(){
    this.route.navigateByUrl("/chart")
  }
}
