import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/Profile';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public completeCount: number = 0;
  public inProcessCount: number = 0;
  public pendingCount: number = 0;
  public totalCount:number=0;
  public AllProjectList:Array<Project>=[];

  constructor(private profileService: ProfileServiceService,private snackBr:MatSnackBar) {}

  ngOnInit(): void {
    
    Chart.register(...registerables);
    this.getCompletedcount();
    this.getInProcessCount();
    this.getPendindCount();
    this.getTotalCount()
    this.createPieChart();
  }
getTotalCount(){
  this.profileService.getProjects().subscribe(res=>{
this.totalCount=res.length;
this.AllProjectList=res;
  })

}
 
  getCompletedcount(){
    this.profileService.getCompletedProjectProfiles().subscribe(res=>{
   this.completeCount=res.length;
   console.log(this.completeCount);
    
    })
  }
  getInProcessCount(){
  this.profileService.getInProcessProjectProfiles().subscribe(res=>{
  this.inProcessCount=res.length;
  console.log(this.inProcessCount);
  
  
  })
  }
  getPendindCount(){
    this.profileService.getPendingProjectProfiles().subscribe(res=>{
      this.pendingCount=res.length;
      console.log(this.pendingCount);
      
    })

  }
  


  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['In Progress', 'Pending', 'Completed'],
          datasets: [{
            label: 'Project Status',
            data: [this.inProcessCount, this.pendingCount, this.completeCount],
            backgroundColor: [' #FFEB3B', '#F44336', '#4CAF50'],
            hoverOffset: 4
          }]
      
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      this.snackBr.open("Internal server Error ","Error",{duration:5000})
    }
  }




  // public lineChartData: any[] = [
  //   {
  //     data: this.AllProjectList.map(project => project.deadline.getTime()),
  //     label: 'Project Deadlines'
  //   }
  // ];
//   public lineChartLabels: string[] = this.AllProjectList.map(project => project.name);
//   public lineChartOptions: any = {
//     responsive: true,
//     scales: {
//       xAxes: [{ display: true }],
//       yAxes: [{ display: true }]
//     }
//   };
//   public lineChartLegend = true;
//   public lineChartType = 'line';
}
