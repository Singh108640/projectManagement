import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/Profile';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { DailogComponent } from '../dailog/dailog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public ProjectList:Array<Project>=[];
  
  public PendingProjectList:Array<Project>=[]
  public InProcessProjectList:Array<Project>=[]
  public OnBardName!:String;

  constructor(private profileService:ProfileServiceService,public dialog: MatDialog, ){
 
  }
  ngOnInit(){
    this.getAllProjects();
      
  }
  getAllProjects(){
    this.profileService.getProjects().subscribe(res=>{
      this.ProjectList=res;
      this.OnBardName="All The Projects"
      })
  }
  getProjectInfo(detail:any){
    const dialogRef = this.dialog.open(DailogComponent, {
      data: detail
    });
  }
  
CompletedProject(){
  this.profileService.getCompletedProjectProfiles().subscribe(res=>{
    this.ProjectList=res;
    this.OnBardName="Completed Projects"
    
    })

}
InprogresProject(){
  this.profileService.getInProcessProjectProfiles().subscribe(res=>{
    this.ProjectList=res;
    this.OnBardName="In Process Projects"
  })
}
PendingProject(){

  this.profileService.getPendingProjectProfiles().subscribe(res=>{
    this.ProjectList=res;
    this.OnBardName="Pending Projects"
  })
}
}
